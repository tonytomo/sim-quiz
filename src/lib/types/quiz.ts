import type { IConfig } from './config';
import type { IFile } from './file';
import type { IQuestions } from './question';
import type { IResult } from './result';
import type { EStep } from './step';

export interface IQuiz {
	step: EStep;
	file?: IFile;
	config?: IConfig;
	questions?: IQuestions;
	result?: IResult;
}
