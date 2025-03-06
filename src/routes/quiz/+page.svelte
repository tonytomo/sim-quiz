<script lang="ts">
	const questions = [
		{
			refIndex: 0,
			question: 'What is the capital of Nigeria?',
			answers: ['Lagos', 'Abuja', 'Kano', 'Ibadan'],
			correctAnswer: 'Abuja'
		},
		{
			refIndex: 1,
			question: 'What is the capital of Ghana?',
			answers: ['Accra', 'Kumasi', 'Tamale', 'Ho'],
			correctAnswer: 'Accra'
		},
		{
			refIndex: 2,
			question: 'What is the capital of Kenya?',
			answers: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'],
			correctAnswer: 'Nairobi'
		},
		{
			refIndex: 3,
			question: 'What is the capital of South Africa?',
			answers: ['Johannesburg', 'Cape Town', 'Pretoria', 'Durban'],
			correctAnswer: 'Pretoria'
		},
		{
			refIndex: 4,
			question: 'What is the capital of Egypt?',
			answers: ['Cairo', 'Alexandria', 'Giza', 'Luxor'],
			correctAnswer: 'Cairo'
		}
	];

	let currentQuestion = 0;
</script>

<header class="container mx-auto p-4 select-none">
	{#each questions as question, index}
		<button
			class={'mx-1 h-12 w-12 cursor-pointer rounded-sm text-2xl font-thin text-white' +
				(currentQuestion === index ? ' bg-teal-800' : ' bg-teal-600')}
			on:click={() => (currentQuestion = index)}
		>
			{index + 1}
		</button>
	{/each}
</header>

<main class="container mx-auto p-4 select-none">
	<p class="text-lg font-thin">
		{questions[currentQuestion].question}
	</p>
	<section class="mt-4 flex flex-col items-start justify-center gap-2">
		{#each questions[currentQuestion].answers as answer}
			<label
				class={'flex cursor-pointer items-center gap-2 text-lg' +
					(answer === questions[currentQuestion].correctAnswer ? ' font-bold' : ' font-thin')}
			>
				<input type="radio" name="answer" value={answer} />
				<span>{answer}</span>
			</label>
		{/each}
	</section>
</main>

<footer class="container mx-auto p-4 text-center">
	<button
		class="mx-2 cursor-pointer rounded-sm bg-teal-800 px-4 py-2 text-white hover:bg-teal-700"
		on:click={() => {
			if (currentQuestion > 0) currentQuestion -= 1;
		}}
	>
		Previous
	</button>
	<button
		class="mx-2 cursor-pointer rounded-sm bg-teal-800 px-4 py-2 text-white hover:bg-teal-700"
		on:click={() => {
			if (currentQuestion < questions.length - 1) currentQuestion += 1;
		}}
	>
		Next
	</button>
</footer>
