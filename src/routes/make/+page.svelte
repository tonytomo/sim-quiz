<script lang="ts">
	import { resolve } from '$app/paths';
	import Meta from '$lib/components/layout/meta.svelte';
	import {
		DEFAULT_QUIZ_INTRO,
		DEFAULT_QUIZ_QUESTION,
		DEFAULT_QUIZ_REF,
		DEFAULT_QUIZ_SETTINGS
	} from '$lib/constant/quiz';
	import { EQuestionType, type IQuizQuestion, type IQuizRef } from '$lib/types/quiz';

	type TFocus = 'review' | 'intro' | 'settings' | 'refs' | 'questions';

	let currentFocus: TFocus = $state('review');
	let quizIntro = $state(DEFAULT_QUIZ_INTRO);
	let quizSettings = $state(DEFAULT_QUIZ_SETTINGS);
	let newQuizRef: IQuizRef = $state(DEFAULT_QUIZ_REF);
	let newQuizQuestion: IQuizQuestion = $state(DEFAULT_QUIZ_QUESTION);
	let quizRefs: IQuizRef[] = $state([]);
	let quizQuestions: IQuizQuestion[] = $state([]);
	let newQuizRefText = $state(DEFAULT_QUIZ_REF.paragraphs.join('\n'));
	let newOptionsText = $state(DEFAULT_QUIZ_QUESTION.options.join('\n'));

	function insertQuizRef() {
		if (!newQuizRefText.trim()) return;
		newQuizRef.id = crypto.randomUUID();
		newQuizRef.paragraphs = newQuizRefText.split('\n');

		quizRefs.push(newQuizRef);
		newQuizRef = DEFAULT_QUIZ_REF;
		newQuizRefText = DEFAULT_QUIZ_REF.paragraphs.join('\n');
	}

	function removeQuizRef(id: string) {
		quizRefs = quizRefs.filter((ref) => ref.id !== id);
	}

	function insertQuizQuestion() {
		if (!newOptionsText.trim()) return;
		newQuizQuestion.id = crypto.randomUUID();
		newQuizQuestion.type =
			newQuizQuestion.options.length > 1 ? EQuestionType.MultipleChoice : EQuestionType.ShortAnswer;
		newQuizQuestion.options = newOptionsText.split('\n');

		if (newQuizQuestion.options.length === 0) return;

		quizQuestions.push(newQuizQuestion);
		newQuizQuestion = DEFAULT_QUIZ_QUESTION;
		newOptionsText = DEFAULT_QUIZ_QUESTION.options.join('\n');
	}

	function removeQuizQuestion(id: string) {
		quizQuestions = quizQuestions.filter((ref) => ref.id !== id);
	}

	function generateQuiz() {
		// Handle generate quiz
		console.log('Generating Quiz');
	}
</script>

<Meta
	title="Buat Kuis - Sim Quiz"
	description="Buat kuis interaktif dengan mudah menggunakan Sim Quiz. Sesuaikan pertanyaan, pengaturan, dan referensi untuk pengalaman belajar yang optimal."
	url={resolve('/make')}
/>

<main class="flex h-screen">
	<aside class="hidden w-xs flex-col p-4 md:flex">
		<div class="flex items-center gap-4">
			<a href="/" class="btn btn-sm btn-accent">Kembali</a>
			<h1 class="text-lg font-bold">Buat Kuis</h1>
		</div>

		<nav class="my-auto flex flex-col gap-4">
			<button
				class="btn btn-info"
				class:btn-active={currentFocus === 'review'}
				onclick={() => (currentFocus = 'review')}
			>
				Review
			</button>
			<button
				class="btn btn-info"
				class:btn-active={currentFocus === 'intro'}
				onclick={() => (currentFocus = 'intro')}
			>
				Awalan Kuis
			</button>
			<button
				class="btn btn-info"
				class:btn-active={currentFocus === 'settings'}
				onclick={() => (currentFocus = 'settings')}
			>
				Pengaturan
			</button>
			<button
				class="btn btn-info"
				class:btn-active={currentFocus === 'refs'}
				onclick={() => (currentFocus = 'refs')}
			>
				Referensi
			</button>
			<button
				class="btn btn-info"
				class:btn-active={currentFocus === 'questions'}
				onclick={() => (currentFocus = 'questions')}
			>
				Pertanyaan
			</button>
		</nav>
	</aside>

	<!-- TODO: Simplify style -->

	<section
		class="scrollbar-simple size-full overflow-y-auto rounded-4xl border-12 border-gray-100 bg-gray-100 p-6 dark:border-gray-900 dark:bg-gray-950"
	>
		{#if currentFocus === 'review'}
			<div class="flex flex-col gap-4">
				<h2 class="text-gradient place-self-center text-4xl font-black">Review</h2>
				<!-- TODO: Buat desain pakai window -->
				<p>Nama Kuis: {quizIntro.title}</p>
				<p>Jumlah Referensi: {quizRefs.length}</p>
				<p>Jumlah Pertanyaan: {quizQuestions.length}</p>

				<button class="btn btn-lg btn-success place-self-start" onclick={generateQuiz}>
					Generasi Kuis
				</button>
			</div>
		{:else if currentFocus === 'intro'}
			<div class="flex flex-col gap-16">
				<h2 class="text-gradient place-self-center text-4xl font-black">Kuis Baru</h2>
				<div class="flex flex-col gap-4">
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400">Judul</span>
						<input
							type="text"
							bind:value={quizIntro.title}
							placeholder="Judul Kuis"
							class="input"
						/>
					</label>
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400"> Instruksi </span>
						<textarea bind:value={quizIntro.instruction} class="textarea" rows={5}></textarea>
					</label>
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400">
							Contoh (Opsional)
						</span>
						<textarea bind:value={quizIntro.example} class="textarea" rows={5}></textarea>
					</label>
				</div>
			</div>
		{:else if currentFocus === 'settings'}
			<div class="flex flex-col gap-16">
				<h2 class="text-gradient place-self-center text-4xl font-black">Pengaturan</h2>
				<div class="flex flex-col gap-4">
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400">
							Jumlah Pertanyaan
						</span>
						<input type="number" min="1" bind:value={quizSettings.numberOfQuestion} class="input" />
					</label>
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400">
							Waktu per Pertanyaan (detik)
						</span>
						<input
							type="number"
							min="5"
							bind:value={quizSettings.timePerQuestionInSecond}
							class="input"
						/>
					</label>
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400">
							Acak Pertanyaan
						</span>
						<input type="checkbox" bind:checked={quizSettings.shuffleQuestion} class="checkbox" />
					</label>
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400"> Acak Jawaban </span>
						<input type="checkbox" bind:checked={quizSettings.oneWay} class="checkbox" />
					</label>
				</div>
			</div>
		{:else if currentFocus === 'refs'}
			<div class="flex flex-col gap-16">
				<h2 class="text-gradient place-self-center text-4xl font-black">Referensi</h2>
				<div class="flex flex-col gap-4">
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400">Label</span>
						<input
							type="text"
							bind:value={newQuizRef.label}
							placeholder="Label referensi"
							class="input"
						/>
					</label>
					<label class="flex items-start gap-4">
						<span class="w-64 font-semibold text-gray-600 dark:text-gray-400">
							Referensi Soal
						</span>
						<div class="flex grow flex-col items-start gap-4">
							<textarea
								bind:value={newQuizRefText}
								class="textarea"
								rows={5}
								placeholder="Buat referensi baru"
							></textarea>
							<button class="btn btn-success" onclick={insertQuizRef}> Tambah Referensi </button>
						</div>
					</label>
				</div>

				<div class="flex flex-col gap-4">
					<h3 class="text-xl font-medium">Daftar Referensi</h3>
					<div class="card-border">
						{#if quizRefs.length === 0}
							<p class="text-gray-600 dark:text-gray-400">Belum ada referensi</p>
						{/if}
						{#each quizRefs as ref, i (ref.id)}
							<div class="flex gap-2">
								<p class="font-mono text-gray-600 dark:text-gray-400">[{i + 1}]</p>
								<p class="grow">{ref.paragraphs.join(' ').slice(0, 250)}</p>
								<button
									class="btn btn-danger place-self-start"
									onclick={() => removeQuizRef(ref.id)}
								>
									Hapus
								</button>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{:else if currentFocus === 'questions'}
			<div class="flex flex-col gap-16">
				<h2 class="text-gradient place-self-center text-4xl font-black">Soal dan Jawaban</h2>
				<div class="flex gap-4">
					<div class="flex flex-col gap-4 border-r-2 border-gray-300 p-2 pr-4 dark:border-gray-700">
						{#if quizQuestions.length === 0}
							<div
								class="btn grid aspect-square min-w-16 place-items-center bg-white dark:bg-gray-950"
							>
								-
							</div>
						{/if}
						{#each quizQuestions as question, i (question.id)}
							<button class="btn btn-info grid aspect-square min-w-16 place-items-center">
								{i + 1}
							</button>
						{/each}
					</div>
					<div class="relative">
						<div class="sticky top-8 flex flex-col gap-4">
							<label class="flex items-start gap-4">
								<span class="w-64 font-semibold text-gray-600 dark:text-gray-400"> Referensi </span>
								<select bind:value={newQuizQuestion.refId} class="select">
									<option value={null} selected>(Tidak ada referensi)</option>
									{#each quizRefs as ref}
										<option value={ref.id}>{ref.label}</option>
									{/each}
								</select>
							</label>
							<label class="flex items-start gap-4">
								<span class="w-64 font-semibold text-gray-600 dark:text-gray-400">
									Pertanyaan
								</span>
								<textarea bind:value={newQuizQuestion.question} class="textarea" rows={3}
								></textarea>
							</label>
							<label class="flex items-start gap-4">
								<span class="w-64 font-semibold text-gray-600 dark:text-gray-400"> Poin </span>
								<input type="number" bind:value={newQuizQuestion.point} class="input" />
							</label>
							<label class="flex items-start gap-4">
								<span class="w-64 font-semibold text-gray-600 dark:text-gray-400"> Kesulitan </span>
								<input
									type="range"
									min="1"
									max="5"
									step="1"
									bind:value={newQuizQuestion.difficulty}
									class="range grow"
								/>
								<span class="font-bold">{newQuizQuestion.difficulty}</span>
							</label>

							<!-- TODO: Pilihan, Jawaban, Penjelasan -->

							<button class="btn btn-primary place-self-center" onclick={insertQuizQuestion}>
								Tambah Pertanyaan
							</button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</section>
</main>
