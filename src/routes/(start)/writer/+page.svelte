<script lang="ts">
	import { goto } from '$app/navigation';
	import Aes from '$lib/components/aes.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<Header />

<main class="container-blog my-20 gap-4 scroll-smooth">
	<section class="container-blog gap-10 p-4">
		<h1 class="big-title">You can write your own quizzes!</h1>
		<p class="subtitle">
			You can write your own quizzes and share them with your friends. You can also use them to
			study for your exams or to test your knowledge on a specific topic.<br />
			<br />
			Estimate reading time: 5 minutes
		</p>
	</section>

	<hr />

	<section class="container-blog gap-2 p-4">
		<div class="container-color">
			<h2 class="title">Table of contents</h2>
			<ul class="list-inside list-decimal text-sm">
				<li><a href="#how-to-write-a-quiz">How to write a quiz?</a></li>
				<li><a href="#what-do-the-settings-mean">What do the settings mean?</a></li>
				<li><a href="#how-to-write-the-text">How to write the text?</a></li>
				<li><a href="#how-to-write-the-questions">How to write the questions?</a></li>
				<li><a href="#example">Example</a></li>
				<li><a href="#how-to-use-the-quiz">How to use the quiz?</a></li>
				<li><a href="#start-writing-your-own-quizzes">Start writing your own quizzes!</a></li>
				<li><a href="#securing-the-quiz-file">Securing the quiz file</a></li>
			</ul>
		</div>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-write-a-quiz">
		<h2 class="title">How to write a quiz?</h2>
		<p class="subtitle">
			You can write a quiz by creating a text file with the extension ".txt". The file should have a
			list of settings, a text, and a list of questions. The settings are the maximum number of
			questions, the time per question, if the user can go back, and if the questions are random. <br
			/>
			<br />
			The text is the text that will be shown before the questions. The questions are the questions that
			will be shown to the user. You can see a format example below.
		</p>
		<p class="container-color mt-2 text-start font-mono text-sm select-text">
			[Max questions, Time per question, User can go back, Questions are random]<br />
			<br />
			Text:<br />
			Paragraph 1<br />
			Paragraph 2<br />
			Paragraph 3<br />
			Paragraph 4<br />
			#Number of questions<br />
			<br />
			Question 1<br />
			Answer 1<br />
			@Answer 2<br />
			Answer 3<br />
			Answer 4<br />
			<br />
			Question 2<br />
			Answer 1<br />
			@Answer 2<br />
			Answer 3<br />
			Answer 4<br />
			<br />
			Question 3<br />
			Answer 1<br />
			@Answer 2<br />
			Answer 3<br />
			Answer 4<br />
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="what-do-the-settings-mean">
		<h2 class="title">What do the settings mean?</h2>
		<div class="grid grid-cols-2 gap-1 text-sm">
			<div class="container-color">
				<p class="mb-2 font-bold">Max questions</p>
				<h3>
					The maximum number of questions that will be shown to the user. The questions are picked
					randomly from the list of questions.
				</h3>
			</div>
			<div class="container-color gap-2">
				<p class="mb-2 font-bold">Time per question</p>
				<h3>
					The time the user has to answer each question. If the user doesn't answer the question
					within the time limit, the question is marked as incorrect.
				</h3>
			</div>
			<div class="container-color gap-2">
				<p class="mb-2 font-bold">User can go back</p>
				<h3>
					If this setting is enabled, the user can go back to the previous question. If this setting
					is disabled, the user can't go back to the previous question.
				</h3>
			</div>
			<div class="container-color gap-2">
				<p class="mb-2 font-bold">Questions are random</p>
				<h3>
					If this setting is enabled, the questions are picked randomly from the list of questions.
					If this setting is disabled, the questions are shown in the order they are written.
				</h3>
			</div>
		</div>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-write-the-text">
		<h2 class="title">How to write the text?</h2>
		<p class="subtitle">
			You can write the text of the quiz in plain text format. You can add as many paragraphs as you
			want. The paragraphs will be shown before the questions. <br />
			<br />
			After the text, you should add a separator "#" followed by the number of questions that relate
			to the text. For example, you can write a short fable story or a descriptive text about a topic.
		</p>
		<p class="container-color mt-2 text-start font-mono text-sm select-text">
			...<br />
			<br />
			Text:<br />
			Once upon a time, there was a Tiger who lived in the jungle...<br />
			He was the king of the jungle and everyone respected him...<br />
			One day, he met a Fox who was very clever and cunning...<br />
			The Fox challenged the Tiger to a quiz to see who was smarter...<br />
			#3<br />
			<br />
			...<br />
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-write-the-questions">
		<h2 class="title">How to write the questions?</h2>
		<p class="subtitle">
			You can write the questions in plain text format. You can add as many questions as you want.
			Each question should have at least 2 answers, one of which is correct. <br />
			<br />
			The correct answer should be marked with an "@" symbol. For example, you can write questions about
			a topic or a quiz about a animals.
		</p>
		<p class="container-color mt-2 text-start font-mono text-sm select-text">
			...<br />
			<br />
			What animal that is related with cats?<br />
			@Tiger<br />
			Crocodile<br />
			Elephant<br />
			Giraffe<br />
			<br />
			What animal that can fly?<br />
			Bear<br />
			@Eagle<br />
			Lion<br />
			Tiger<br />
			<br />
			What animal that lives in the water?<br />
			Lion<br />
			Tiger<br />
			Eagle<br />
			@Fish<br />
			<br />
			...<br />
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="example">
		<h2 class="title">Example</h2>
		<p class="subtitle">
			Here is an example of a quiz with max questions of 3, 10 seconds per question, the user can go
			back, and the questions are random. We also have a 4-paragraph text for the 3 following
			questions and 3 questions with 4 answers each.
		</p>
		<p class="container-color mt-2 text-start font-mono text-sm select-text">
			[3, 10, true, false]<br />
			<br />
			Text:<br />
			Europe Capitals are important to know.<br />
			First of all we have France, which is a beautiful country.<br />
			Then we have Germany, which is a powerful country.<br />
			Finally we have Spain, which is a warm country.<br />
			#3<br />
			<br />
			What is the capital of France?<br />
			Paris<br />
			@London<br />
			Berlin<br />
			Madrid<br />
			<br />
			What is the capital of Germany?<br />
			Paris<br />
			London<br />
			@Berlin<br />
			Madrid<br />
			<br />
			What is the capital of Spain?<br />
			Paris<br />
			London<br />
			Berlin<br />
			@Madrid<br />
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-use-the-quiz">
		<h2 class="title">How to use the quiz?</h2>
		<p class="subtitle">
			You can use the quiz by uploading the file to the website. The quiz will be shown to you and
			you can answer the questions. You can also share the quiz with your friends by sharing the
			link to the quiz.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="start-writing-your-own-quizzes">
		<h2 class="title">Start writing your own quizzes!</h2>
		<p class="subtitle">
			Now that you know how to write a quiz, you can start writing your own quizzes and share them
			with your friends. You can also use them to study for your exams or to test your knowledge on
			a specific topic.
		</p>
	</section>

	<hr />

	<section class="container-blog gap-10 p-4">
		<h1 class="big-title">Encrypting the quiz file</h1>
		<p class="subtitle">
			Securing the quiz file is important if you want to prevent others from reading the content of
			the file.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="securing-the-quiz-file">
		<h2 class="title">Securing the quiz file</h2>
		<p class="subtitle">
			You can secure the quiz file by encrypting it using AES encryption. This will prevent others
			from reading the content of the file unless they have the encryption key. You can use this
			tool below to encrypt your quiz file. <br />
			<br />
			You will get an encrypted file and an encryption key. You can share the encrypted file with others
			and give them the encryption key to decrypt the file.
		</p>
	</section>

	<Aes />
</main>

<footer class="container-bottom justify-end gap-2">
	<button aria-label="Back" class="box btn btn-slate" on:click={() => goto('/')}>
		<i class="ri-arrow-left-line"></i>
	</button>
	<button
		aria-label="Back to top"
		class="box btn btn-blue"
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	>
		<i class="ri-arrow-up-s-line"></i>
	</button>
</footer>
