/**
 * Interface representing a file used in the quiz application.
 * It includes the file object, its name, content, and size.
 */
export interface IFile {
	file: File;
	filename: string;
	content: string | ArrayBuffer;
	size: number;
}
