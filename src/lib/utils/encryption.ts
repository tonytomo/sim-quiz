async function encryptContent(key: CryptoKey, content: string): Promise<ArrayBuffer> {
	const encoder = new TextEncoder();
	const data = encoder.encode(content);

	const iv = crypto.getRandomValues(new Uint8Array(16)); // Generate a random IV

	const encryptedData = await crypto.subtle.encrypt(
		{
			name: 'AES-CBC',
			iv: iv
		},
		key,
		data
	);

	// Combine the IV and encrypted data into a single ArrayBuffer
	const combinedData = new Uint8Array(iv.byteLength + encryptedData.byteLength);
	combinedData.set(iv, 0);
	combinedData.set(new Uint8Array(encryptedData), iv.byteLength);

	return combinedData.buffer; // Return the combined ArrayBuffer
}

async function decryptContent(key: CryptoKey, combinedData: ArrayBuffer): Promise<string> {
	try {
		const iv = new Uint8Array(combinedData, 0, 16); // Extract the IV
		const encryptedData = new Uint8Array(combinedData, 16); // Extract the encrypted data

		const decryptedData = await crypto.subtle.decrypt(
			{
				name: 'AES-CBC',
				iv: iv
			},
			key,
			encryptedData
		);

		const decoder = new TextDecoder();
		return decoder.decode(decryptedData);
	} catch (error) {
		console.error('Decryption failed:', error);
		return '';
	}
}

async function generateKey(): Promise<CryptoKey> {
	return crypto.subtle.generateKey(
		{
			name: 'AES-CBC',
			length: 256
		},
		true, // extractable
		['encrypt', 'decrypt']
	);
}

async function exportKey(key: CryptoKey, filename: string): Promise<void> {
	const exportedKey = await crypto.subtle.exportKey('jwk', key); // Export as JWK (JSON Web Key)
	const keyString = JSON.stringify(exportedKey, null, 2); // Format as JSON

	await createAndDownloadFile(filename, keyString, 'application/json');
}

async function importKey(keyData: any): Promise<CryptoKey> {
	return crypto.subtle.importKey('jwk', keyData, { name: 'AES-CBC' }, true, ['encrypt', 'decrypt']);
}

async function createAndDownloadFile(
	filename: string,
	content: string | ArrayBuffer,
	type: string
) {
	const blob = new Blob([content], { type: type });
	const url = URL.createObjectURL(blob);
	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

async function encryptAndDownload(content: string, key: CryptoKey, filename: string) {
	const encrypted = await encryptContent(key, content);
	await createAndDownloadFile(filename, encrypted, 'application/octet-stream');
}

async function decryptAndDownload(encrypted: ArrayBuffer, key: CryptoKey, filename: string) {
	const decrypted = await decryptContent(key, encrypted);
	await createAndDownloadFile(filename, decrypted, 'text/plain');
}

export {
	encryptContent,
	decryptContent,
	generateKey,
	exportKey,
	importKey,
	encryptAndDownload,
	decryptAndDownload
};
