import type { Question, QuizQuestion, Text } from '$lib/types/quiz-question';
import type { QuizSetting } from '$lib/types/quiz-setting';

export function parseQuizSettings(quiz: string): QuizSetting {
	const quizParts = quiz.split('\n\r\n');

	const settingText = quiz.split('\n\r\n')[0].substring(1, quizParts[0].length - 2);
	const quizSettings = settingText.split(',').map((setting) => {
		if (setting === 'true') return true;
		if (setting === 'false') return false;
		return parseInt(setting);
	});

	return {
		maxQuestions: quizSettings[0] as number,
		timePerQuestion: quizSettings[1] as number,
		canGoBack: quizSettings[2] as boolean,
		isRandom: quizSettings[3] as boolean
	};
}

export function parseQuizQuestions(quiz: string): QuizQuestion {
	const quizParts = quiz.split('\n\r\n');

	let refs: Text[] = [];
	let lists: Question[] = [];

	for (let i = 1; i < quizParts.length; i++) {
		if (quizParts[i].startsWith('Text:')) {
			const textEnd = quizParts[i].indexOf('#');
			const textBlock = quizParts[i].substring(5, textEnd).replace(/\r\n/g, '<>');
			const textLines = textBlock.substring(2, textBlock.length - 2).split('<>');
			const totalRelated = Number(quizParts[i].substring(textEnd + 1, quizParts[i].length - 1));
			refs.push({ paragraphs: textLines, related: totalRelated });

			const questionBlocks = quizParts.slice(i + 1, i + 1 + totalRelated);
			for (let j = 0; j < questionBlocks.length; j++) {
				let list = {
					refIndex: refs.length - 1,
					question: '',
					options: [] as string[],
					answer: '',
					explanation: [] as string[]
				};

				const lines = questionBlocks[j].split('\r\n');

				list.question = lines[0];

				for (let k = 1; k < lines.length; k++) {
					if (lines[k].startsWith('Explanation:')) {
						k++;
						while (k < lines.length) {
							const explanation = lines[k].replace(/\r/g, '');
							list.explanation.push(explanation);
							k++;
						}
					} else if (lines[k].startsWith('@')) {
						list.answer = lines[k].substring(1);
						list.options.push(lines[k]);
					} else {
						list.options.push(lines[k]);
					}
				}

				lists.push(list);
			}
			i += totalRelated;
		} else {
			let list = {
				refIndex: -1,
				question: '',
				options: [] as string[],
				answer: '',
				explanation: [] as string[]
			};

			const lines = quizParts[i].split('\r\n');

			list.question = lines[0];

			for (let j = 1; j < lines.length; j++) {
				if (lines[j].startsWith('Explanation:')) {
					j++;
					while (j < lines.length) {
						const explanation = lines[j].replace(/\r/g, '');
						list.explanation.push(explanation);
						j++;
					}
				} else if (lines[j].startsWith('@')) {
					list.answer = lines[j].substring(1);
					list.options.push(lines[j]);
				} else {
					list.options.push(lines[j]);
				}
			}

			lists.push(list);
		}
	}
	return {
		refs: refs,
		lists: lists
	};
}
