<script lang="ts">
	import { EncryptionStep } from '$lib/types/quiz-step';
	import { convertBytes } from '$lib/utils/converter';
	import { generateKey, encryptAndDownload, exportKey } from '$lib/utils/encryption';

	let ref: HTMLInputElement | null = null;
	let key: CryptoKey;
	let file: File | null = null;
	let filename = 'default';
	let step = EncryptionStep.upload;

	function handleUploadFile() {
		if (ref && ref.files && ref.files[0]) {
			file = ref.files[0];
			if (file.type !== 'text/plain') {
				alert('Please select a text file.');
				return;
			}
			if (file.size > 1024 * 1024) {
				alert('Please select a file smaller than 1MB.');
				return;
			}
			step = EncryptionStep.generate;
			filename = file.name.split('.').shift() || 'default';
		}
	}

	async function handleGenerateKey() {
		key = await generateKey();
		await exportKey(key, `${filename}_key.json`);
		step = EncryptionStep.encrypt;
	}

	async function handleEncryptFile() {
		if (file) {
			const content = await file.text();
			await encryptAndDownload(content, key, `${filename}.enc`);
		}
	}
</script>

<section class="container-blog gap-2 p-4" id="aes-encryption-tool">
	<h1 class="title">AES Encryption Tool</h1>
	<h2 class="subtitle">
		You can use this tool to encrypt and decrypt your quiz file using AES encryption.
	</h2>
	<p class="container-color mt-2 text-start font-mono text-sm">
		1. Upload a .txt file to encrypt. <br />
		2. Generate a key to encrypt the file. <br />
		3. Encrypt the file. <br />
		<br />
		File: <span class="text-blue-500">{file?.name || 'No file selected'}</span> <br />
		Size: <span class="text-blue-500">{file?.size ? convertBytes(file.size) : 'N/A'}</span> <br />
		Key:
		<span class={key ? 'text-green-500' : 'text-yellow-500'}
			>{key ? 'Generated' : 'Not generated'}</span
		>
	</p>
	<div class="container-hstack gap-2 text-slate-400">
		<input type="file" accept=".txt" hidden bind:this={ref} on:change={handleUploadFile} />
		<button aria-label="Upload file" on:click={() => ref?.click()} class="box btn btn-blue">
			<i class="ri-upload-2-line"></i>
		</button>
		<i class="ri-arrow-right-s-line"></i>
		<button
			disabled={step < EncryptionStep.generate}
			aria-label="Generate Key"
			on:click={() => handleGenerateKey()}
			class="box btn btn-yellow"
		>
			<i class="ri-key-fill"></i>
		</button>
		<i class="ri-arrow-right-s-line"></i>
		<button
			disabled={step < EncryptionStep.encrypt}
			aria-label="Encrypt File"
			on:click={() => handleEncryptFile()}
			class="box btn btn-green"
		>
			<i class="ri-lock-fill"></i>
		</button>
	</div>
</section>
