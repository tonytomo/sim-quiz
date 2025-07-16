export interface IProfile {
	name: string;
	avatar?: string;
	level?: TLevel;
	experience?: number;
	quizzesTaken?: number;
	quizzesCreated?: number;
}

export type TLevel = 'Copper' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
