<script lang="ts">
	import { onMount } from 'svelte';

	let isDragging = false;
	let dragCounter = 0;

	function onDragEnter(e: DragEvent) {
		e.preventDefault();
		if (!e.dataTransfer?.types?.includes('Files')) return;
		dragCounter++;
		isDragging = true;
	}

	function onDragLeave() {
		dragCounter--;
		if (dragCounter <= 0) {
			isDragging = false;
			dragCounter = 0;
		}
	}

	function onDrop(e: DragEvent) {
		e.preventDefault();
		isDragging = false;
		dragCounter = 0;

		const files = e.dataTransfer?.files;
		if (files && files.length > 0) {
			const acceptedFiles = Array.from(files).filter(
				(file) =>
					['text/plain', 'application/octet-stream'].includes(file.type) ||
					file.name.endsWith('.txt') ||
					file.name.endsWith('.squiz')
			);
			if (acceptedFiles.length === 0) return;
			console.log('Accepted files:', acceptedFiles);
		}
	}
</script>

<button
	id="drop-zone"
	class="fixed inset-0 grid place-items-center {isDragging
		? 'z-50 bg-black/50 backdrop-blur-md'
		: 'z-0'}"
	on:dragenter={onDragEnter}
	on:dragleave={onDragLeave}
	on:dragover|preventDefault
	on:drop={onDrop}
>
	{#if isDragging}
		<div class="p-8 text-center text-gray-100">
			<p class="text-2xl font-black">Letakkan file di sini</p>
			<p class="mt-2">Mendukung format: .txt, .squiz</p>
		</div>
	{/if}
</button>
