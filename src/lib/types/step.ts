/**
 * Enumeration representing the different steps in a quiz process.
 * It includes steps for idle, preparing, ready, starting, and completing the quiz.
 */
export enum EStep {
	idle,
	prepare,
	ready,
	start,
	done
}

/**
 * Enumeration representing the different encryption steps.
 * It includes steps for uploading, generating, and encrypting.
 */
export enum EEncryptionStep {
	upload,
	generate,
	encrypt
}
