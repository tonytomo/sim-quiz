import type { IConfig } from './config';
import type { IFile } from './file';
import type { IQuestions } from './question';
import type { IResult } from './result';
import type { EStep } from './step';

/**
 * Interface representing the state of a quiz.
 * It includes the current step of the quiz, an optional file, configuration settings,
 * an optional question, and an optional result.
 */
export interface IQuiz {
	step: EStep;
	file?: IFile;
	config?: IConfig;
	questions?: IQuestions;
	result?: IResult;
}
