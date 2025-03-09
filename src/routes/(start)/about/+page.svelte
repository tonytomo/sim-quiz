<script lang="ts">
	import Header from '$lib/components/header.svelte';
</script>

<Header isHome />

<main class="container-blog my-20 gap-4 scroll-smooth">
	<section class="container-blog gap-10 p-4">
		<h1 class="big-title">What is SimQuiz?</h1>
		<h2 class="subtitle">
			SimQuiz is a simple quiz app that allows you to create and share quizzes with your friends.
			You can also use it to study for your exams or to test your knowledge on a specific topic.<br
			/>
			<br />
			In simple terms, SimQuiz is a quiz simulator.
		</h2>
	</section>

	<hr />

	<section class="container-blog gap-2 p-4">
		<div class="container-color">
			<h2 class="title">Table of contents</h2>
			<ul class="list-inside list-decimal text-sm">
				<li><a href="#welcomer">Welcomer</a></li>
				<li><a href="#how-to-use-simquiz">How to use SimQuiz?</a></li>
				<li><a href="#how-to-create-a-quiz">How to create a quiz?</a></li>
				<li><a href="#how-to-share-a-quiz">How to share a quiz?</a></li>
				<li><a href="#how-to-use-simquiz-for-fun">How to use SimQuiz for fun?</a></li>
				<li><a href="#how-to-use-simquiz-for-learning">How to use SimQuiz for learning?</a></li>
				<li><a href="#how-to-use-simquiz-for-education">How to use SimQuiz for education?</a></li>
				<li><a href="#how-to-use-simquiz-for-business">How to use SimQuiz for business?</a></li>
				<li>
					<a href="#how-to-use-simquiz-for-competition">How to use SimQuiz for competition?</a>
				</li>
				<li>
					<a href="#thoughts-about-buying-and-selling-quiz-files">
						Thoughts about buying and selling quiz files
					</a>
				</li>
			</ul>
		</div>
	</section>

	<section class="container-blog gap-2 p-4" id="welcomer">
		<h2 class="title">Welcomer</h2>
		<p class="subtitle">
			Welcome to SimQuiz! SimQuiz is a simple quiz app that allows you to create and share quizzes
			with your friends. You can also use it to study for your exams or to test your knowledge on a
			specific topic. It is also can be used for fun, learning, education, business, and simple
			competition.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-use-simquiz">
		<h2 class="title">How to use SimQuiz?</h2>
		<p class="subtitle">
			To use SimQuiz, you need to get a quiz file. You can get a quiz file by creating one yourself
			or by getting one from a friend or somewhere else. Once you have a quiz file, you can open it
			with SimQuiz and start answering the questions.<br />
			<br />
			Quiz file you need to have is either a <b>".txt"</b> or <b>".enc"</b> file. ".txt" file is a
			plain text file that don't need any key to open. While ".enc" file is an encrypted file that
			need a key to open. You should ask the key from the creator of the quiz file with
			<b>".json"</b> extension.
		</p>
		<p class="container-color mt-2 text-sm">
			We have example quiz files that you can download and try. You can download the example quiz
			files by clicking <b><a target="_blank" href="/example-download">here</a></b>.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-create-a-quiz">
		<h2 class="title">How to create a quiz?</h2>
		<p class="subtitle">
			You can create a quiz by writing a text file with the extension ".txt". The file should have a
			list of settings, a text, and a list of questions. The settings are the maximum number of
			questions, the time per question, if the user can go back, and if the questions are random.
		</p>
		<p class="container-color mt-2 text-sm">
			You can see a more detailed guide on how to write a quiz by clicking
			<b><a href="/writer">here</a></b>.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-share-a-quiz">
		<h2 class="title">How to share a quiz?</h2>
		<p class="subtitle">
			To share a quiz, you need to have a quiz file. You can share the quiz file with your friends
			by sending it to them via email, chat, or any other way you prefer. You can also share the
			quiz file on social media or on a website.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-use-simquiz-for-fun">
		<h2 class="title">How to use SimQuiz for fun?</h2>
		<p class="subtitle">
			You can use SimQuiz for fun by creating and sharing quizzes with your friends. You can create
			quizzes on any topic you like and share them with your friends to see who knows more about the
			topic. You can also use SimQuiz to test your knowledge on a specific topic and see how well
			you know it.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-use-simquiz-for-learning">
		<h2 class="title">How to use SimQuiz for learning?</h2>
		<p class="subtitle">
			You can use SimQuiz for learning by creating quizzes on the topics you want to learn about.
			You can create quizzes on any subject you like and use them to test your knowledge on the
			subject. You can also use SimQuiz to study for your exams and to see how well you know the
			subject.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-use-simquiz-for-education">
		<h2 class="title">How to use SimQuiz for education?</h2>
		<p class="subtitle">
			If you are a teacher, you can use SimQuiz for education by creating quizzes for your students.
			You can create quizzes on the topics you are teaching and use them to test your students on
			their knowledge. You can also use SimQuiz to create quizzes for your students to study for
			their exams.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-use-simquiz-for-business">
		<h2 class="title">How to use SimQuiz for business?</h2>
		<p class="subtitle">
			If you are a business owner, you can use SimQuiz for business by creating quizzes for your
			employees. You can create quizzes on the topics you want your employees to learn about and use
			them to test their knowledge. You can also use SimQuiz to create quizzes for your employees to
			study for their exams. <br />
			<br />
			You can also use SimQuiz to create quizzes for your customers to test their knowledge on your products
			or services. You can create quizzes on the features of your products or services and use them to
			educate your customers about them.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="how-to-use-simquiz-for-competition">
		<h2 class="title">How to use SimQuiz for competition?</h2>
		<p class="subtitle">
			You can use SimQuiz for competition by creating quizzes for your friends or colleagues and
			challenging them to see who knows more about a specific topic. You can create quizzes on any
			subject you like and challenge your friends or colleagues to see who can answer the questions
			correctly. You can also use SimQuiz to create quizzes for competitions and see who can answer
			the questions the fastest.
		</p>
	</section>

	<section class="container-blog gap-2 p-4" id="thoughts-about-buying-and-selling-quiz-files">
		<h2 class="title">Thoughts about buying and selling quiz files</h2>
		<p class="subtitle">
			Buying and selling quiz files is a good way to share knowledge and make money. You can create
			quizzes on any topic you like and sell them to others who are interested in the topic. You can
			also buy quiz files from others who have created quizzes on topics you are interested in. <br
			/>
			<br />
			This application is not supporting buying and selling quiz files. We <b>ENCOURAGE</b> you to
			create your own quizzes and share them with your friends for free. But if you want to buy and
			sell quiz files, we are <b>NOT PROHIBITING</b> you from doing so. Any transaction you make is your
			own responsibility.
		</p>
	</section>
</main>

<footer class="container-bottom justify-end gap-2">
	<button
		aria-label="Back to top"
		class="box btn btn-blue"
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	>
		<i class="ri-arrow-up-s-line"></i>
	</button>
</footer>
