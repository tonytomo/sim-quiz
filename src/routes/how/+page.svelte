<script lang="ts">
	import { resolve } from '$app/paths';
	import MainFooter from '$lib/components/layout/footer/mainFooter.svelte';
	import MainHeader from '$lib/components/layout/header/mainHeader.svelte';
	import Meta from '$lib/components/layout/meta.svelte';
	import Ornament from '$lib/components/layout/ornament.svelte';
	import { animateMarquee } from '$lib/utils/animation/marquee';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	onMount(animateMarquee);
</script>

<Meta
	title="SimQuiz: Mulai Membuat Kuis Interaktif"
	description="Pelajari cara membuat kuis interaktif dengan SimQuiz. Ikuti panduan langkah demi langkah kami untuk memulai perjalanan pembuatan kuis Anda."
	url={resolve('/how')}
/>

<MainHeader />
<main>
	<Ornament pos="tl" size={60} />
	<Ornament pos="br" size={48} />

	<section class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center">
		<hgroup class="flex flex-col items-center text-center" in:fly={{ y: 20, duration: 400 }}>
			<div class="mx-auto flex h-80 w-full max-w-6xl items-stretch overflow-hidden">
				<div class="marquee effect-3d scrollbar-none">
					<p
						class="text-[12rem] font-black tracking-tighter text-gray-400 uppercase dark:text-gray-700"
					>
						{#each Array(4) as _, i}
							panduan<span class="text-gradient">kuis</span>
						{/each}
					</p>
				</div>
			</div>
			<h1 class="px-4 text-xl font-medium md:text-2xl">SimQuiz: Mulai Membuat Kuismu</h1>
		</hgroup>

		<div class="mt-8 text-center" in:fly={{ y: 20, duration: 400, delay: 200 }}>
			<a href="#getting-started" title="Mulai Pelajari" class="btn btn-lg btn-info">
				Mulai Pelajari
			</a>
		</div>
	</section>

	<section id="getting-started" class="mx-auto flex max-w-6xl flex-col justify-center px-4 py-16">
		<h2 class="text-gradient mb-4 text-center text-3xl font-black md:text-4xl">
			Ada 2 Cara Memulai
		</h2>
		<p class="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">
			Membuat kuis di SimQuiz itu mudah! Pilih cara yang paling cocok, lalu ikuti
			langkah-langkahnya.
		</p>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<section class="card flex flex-col gap-4 text-center">
				<h3 class="text-2xl font-semibold md:text-3xl">
					Menggunakan <i>Built-in Quiz Maker</i>
				</h3>
				<p class="text-gray-600 dark:text-gray-400">
					Cepat dan mudah! Gunakan pembuat kuis bawaan kami untuk membuat kuis interaktifmu! Ikuti
					setiap langkah-langkahnya.
				</p>
				<a href="/make" title="Buka Quiz Maker" class="btn btn-lg btn-secondary mt-4 self-center">
					Buka Quiz Maker
				</a>
			</section>

			<!-- ## Manual using any text editor (Notepad) -->
			<!-- Follow every instruction (easy to master) -->
			<!-- 1. Text structure -->
			<!-- 2. Components -->
			<!-- 3. If using text reference -->
			<!-- 4. Question Type -->
			<!-- 5. Done -->
			<section class="card flex flex-col gap-4 text-center">
				<h3 class="text-2xl font-semibold md:text-3xl">Metode Manual dengan Editor Teks</h3>
				<p class="text-lg text-gray-600 dark:text-gray-400">
					Kontrol penuh dan bisa dimana saja! Ikuti panduan kami untuk membuat kuismu menggunakan
					editor teks seperti <b>Notepad</b>.
				</p>
				<a href="#structure" title="Baca Panduan" class="btn btn-lg btn-success mt-4 self-center">
					Mulai Membaca
				</a>
			</section>
		</div>
	</section>

	<section id="structure" class="mx-auto flex max-w-6xl flex-col justify-center px-4 py-16">
		<h2 class="text-gradient mb-4 text-center text-3xl font-black md:text-4xl">Struktur Kuis</h2>
		<p class="mb-8 text-center text-lg text-gray-600 dark:text-gray-400">
			Terdapat 4 komponen penting dalam struktur teks kuis yang perlu kamu ketahui:
		</p>
		<div class="grid grid-cols-1 place-items-start gap-8 md:grid-cols-2">
			<div class="window">
				<p class="window-title">kuis.txt</p>
				<p class="text-yellow-500">Init:</p>
				<ul class="list-none">
					<li>number_of_questions: 10</li>
					<li>time_per_question: 15</li>
					<li>shuffle_questions: true</li>
					<li>one_way: false</li>
				</ul>
				<br />
				<p class="text-yellow-500">Ref:</p>
				<p>
					Seekor rubah yang sangat cerdas hidup di hutan. Dia dikenal karena kemampuannya memecahkan
					teka-teki dan tantangan yang sulit...
				</p>
				<p class="text-pink-400">#3</p>
				<br />
				<p class="text-blue-500">Siapa nama rubah tersebut?</p>
				<ul class="list-none">
					<li>Rudi</li>
					<li>Felix</li>
					<li>Fuzzy</li>
					<li class="text-green-500">@Rocky</li>
				</ul>
				<p class="text-yellow-500">Exp:</p>
				<p>Nama rubah tersebut adalah Rocky, yang muncul pada paragraf pertama pada teks.</p>
				<br />
				<p class="text-blue-500">Berapa umur rubah tersebut?</p>
				<ul class="list-none">
					<li class="text-green-500">@3 tahun</li>
				</ul>
				<p class="text-yellow-500">Exp:</p>
				<p>Rubah tersebut berumur 3 tahun, yang disebutkan pada paragraf kedua pada teks.</p>
				<br />
				<p class="text-blue-500">Dimana rubah tersebut tinggal?</p>
				<ul class="list-none">
					<li>Di kota</li>
					<li class="text-green-500">@Di hutan</li>
					<li>Di desa</li>
					<li>Di gunung</li>
				</ul>
				<p class="text-yellow-500">Exp:</p>
				<p>
					Rubah tersebut tinggal di hutan, yang disebutkan pada paragraf pertama kalimat ketiga pada
					teks.
				</p>
				<br />
				<p>...</p>
			</div>
			<div class="card">
				<table class="w-full border-collapse text-left text-gray-600 dark:text-gray-400">
					<thead>
						<tr>
							<th class="border-b pb-2 font-semibold">Komponen</th>
							<th class="border-b pb-2 font-semibold">Deskripsi</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="p-2 align-top font-bold">Pengaturan</td>
							<td class="p-2">
								Bagian ini berisi informasi dasar tentang kuis, seperti jumlah soal, waktu
								pengerjaan, pengacakan soal, dan lain-lain.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Teks Referensi (Opsional)</td>
							<td class="p-2">
								Kamu bisa menambahkan teks referensi yang akan ditampilkan sebelum kuis dimulai. Ini
								berguna untuk memberikan konteks atau informasi penting kepada peserta kuis.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Soal dan Jawaban</td>
							<td class="p-2">
								Bagian utama dari kuis, dimana kamu menuliskan soal-soal serta pilihan jawaban yang
								tersedia. Jenis soal yang didukung meliputi pilihan ganda dan jawaban singkat. Jenis
								soal bergantung pada jumlah jawaban yang diberikan.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Penjelasan (Opsional)</td>
							<td class="p-2">
								Setelah setiap soal, kamu bisa menambahkan penjelasan singkat yang akan ditampilkan
								setelah peserta menyelesaikan kuis tersebut. Ini berguna untuk memberikan feedback
								atau informasi tambahan.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<a
			href="#settings"
			title="Lanjut ke Pengaturan Kuis"
			class="btn btn-lg btn-info mt-8 self-center"
		>
			Lanjut ke Pengaturan Kuis
		</a>
	</section>

	<section id="settings" class="mx-auto flex max-w-6xl flex-col justify-center gap-4 px-4 py-16">
		<h2 class="text-gradient text-center text-3xl font-black md:text-4xl">Pengaturan</h2>
		<p class="mb-4 text-center text-lg text-gray-600 dark:text-gray-400">
			Pengaturan kuis membantu mengontrol bagaimana kuis akan dijalankan. Berikut adalah beberapa
			pengaturan penting yang perlu kamu ketahui:
		</p>
		<div class="grid grid-cols-1 place-items-start gap-8 md:grid-cols-3">
			<div class="window text-lg">
				<p class="window-title">kuis.txt</p>
				<p class="text-yellow-500">Init:</p>
				<ul class="list-none">
					<li>number_of_questions: 10</li>
					<li>time_per_question: 15</li>
					<li>shuffle_questions: true</li>
					<li>one_way: false</li>
				</ul>
				<br />
				<p>...</p>
			</div>
			<div class="card md:col-span-2">
				<table class="w-full border-collapse text-left text-gray-600 dark:text-gray-400">
					<thead>
						<tr>
							<th class="border-b pb-2 font-semibold">Pengaturan</th>
							<th class="border-b pb-2 font-semibold">Deskripsi</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="p-2 align-top font-bold">Jumlah Soal</td>
							<td class="p-2">
								Tentukan berapa banyak soal yang akan ditampilkan dalam kuis. Kamu bisa memilih
								untuk menggunakan semua soal yang ada atau hanya sebagian saja.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Waktu Pengerjaan</td>
							<td class="p-2">
								Kamu bisa menetapkan batas waktu untuk menyelesaikan kuis. Ini berguna untuk
								menambah tantangan bagi peserta kuis.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Pengacakan Soal</td>
							<td class="p-2">
								Aktifkan pengacakan untuk soal agar setiap peserta mendapatkan urutan soal yang
								berbeda, meningkatkan keadilan dalam penilaian.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Sekali Jawab</td>
							<td class="p-2">
								Mengaktifkan opsi ini akan membatasi peserta untuk hanya bisa melanjutkan ke soal
								berikutnya setelah menjawab soal saat ini dan tidak bisa kembali ke soal sebelumnya.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<a
			href="#reference"
			title="Lanjut ke Teks Referensi"
			class="btn btn-lg btn-info mt-8 self-center"
		>
			Lanjut ke Teks Referensi
		</a>
	</section>

	<section id="reference" class="mx-auto flex max-w-6xl flex-col justify-center gap-4 px-4 py-16">
		<h2 class="text-gradient text-center text-3xl font-black md:text-4xl">
			Teks Referensi (Opsional)
		</h2>
		<p class="mb-4 text-center text-lg text-gray-600 dark:text-gray-400">
			Teks referensi adalah bagian opsional yang dapat kamu tambahkan sebelum menulis soal yang
			terkait. Ini berguna untuk memberikan konteks atau informasi penting kepada peserta kuis.
		</p>
		<div class="grid grid-cols-1 place-items-start gap-8 md:grid-cols-3">
			<div class="window text-lg">
				<p>...</p>
				<br />
				<p class="window-title">kuis.txt</p>
				<p class="text-yellow-500">Ref:</p>
				<p>
					Seekor rubah yang sangat cerdas hidup di hutan. Dia dikenal karena kemampuannya memecahkan
					teka-teki dan tantangan yang sulit. Setiap hari, rubah ini berkeliling hutan mencari
					petualangan baru dan membantu hewan-hewan lain dengan kecerdasannya.
				</p>
				<p class="text-pink-400">#3</p>
				<br />
				<p>...</p>
			</div>
			<div class="card md:col-span-2">
				<table class="w-full border-collapse text-left text-gray-600 dark:text-gray-400">
					<thead>
						<tr>
							<th class="border-b pb-2 font-semibold">Aturan</th>
							<th class="border-b pb-2 font-semibold">Deskripsi</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="p-2 align-top font-bold">Awalan</td>
							<td class="p-2">
								Mulai bagian teks referensi dengan kata <b>Ref:</b> di baris baru.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Teks</td>
							<td class="p-2">
								Tuliskan teks referensi yang ingin kamu sertakan. Teks ini bisa berupa paragraf,
								kalimat, atau informasi lain yang relevan dengan soal-soal yang akan kamu buat.
								Baris baru akan menjadi paragraf baru.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Akhiran</td>
							<td class="p-2">
								Akhiri bagian teks referensi dengan menambahkan <b>#[angka]</b> di baris baru. Angka
								ini menunjukkan jumlah soal dibawahnya yang berhubungan dengan teks referensi
								tersebut. Misal, untuk <b>#3</b>, berarti 3 soal dibawahnya akan terkait dengan teks
								referensi ini.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<a
			href="#question-answer"
			title="Lanjut ke Soal dan Jawaban"
			class="btn btn-lg btn-info mt-8 self-center"
		>
			Lanjut ke Soal dan Jawaban
		</a>
	</section>

	<section
		id="question-answer"
		class="mx-auto flex max-w-6xl flex-col justify-center gap-4 px-4 py-16"
	>
		<h2 class="text-gradient text-center text-3xl font-black md:text-4xl">Soal dan Jawaban</h2>
		<p class="mb-4 text-center text-lg text-gray-600 dark:text-gray-400">
			Bagian utama dari kuis adalah soal dan jawaban. Berikut adalah cara menulis soal dan jawaban
			dengan benar:
		</p>
		<div class="grid grid-cols-1 place-items-start gap-8 md:grid-cols-3">
			<div class="window text-lg">
				<p class="window-title">kuis.txt</p>
				<p>...</p>
				<br />
				<p class="text-blue-500">Siapa nama rubah tersebut?</p>
				<ul class="list-none">
					<li>Rudi</li>
					<li>Felix</li>
					<li>Fuzzy</li>
					<li class="text-green-500">@Rocky</li>
				</ul>
				<p class="text-yellow-500">Exp:</p>
				<p>Nama rubah tersebut adalah Rocky, yang muncul pada paragraf pertama pada teks.</p>
				<br />
				<p class="text-blue-500">Berapa umur rubah tersebut?</p>
				<ul class="list-none">
					<li class="text-green-500">@3 tahun</li>
				</ul>
				<p class="text-yellow-500">Exp:</p>
				<p>Rubah tersebut berumur 3 tahun, yang disebutkan pada paragraf kedua pada teks.</p>
				<br />
				<p>...</p>
			</div>
			<div class="card md:col-span-2">
				<table class="w-full border-collapse text-left text-gray-600 dark:text-gray-400">
					<thead>
						<tr>
							<th class="border-b pb-2 font-semibold">Aturan</th>
							<th class="border-b pb-2 font-semibold">Deskripsi</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="p-2 align-top font-bold">Soal</td>
							<td class="p-2">
								Mulai dengan menuliskan soal di baris baru. Soal bisa berupa pertanyaan atau
								pernyataan yang membutuhkan jawaban.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Jawaban Pilihan Ganda</td>
							<td class="p-2">
								Untuk soal pilihan ganda, tuliskan setiap pilihan jawaban di baris baru. Tandai
								jawaban yang benar dengan awalan <b>@</b>. Kamu hanya bisa menandai satu jawaban
								yang benar untuk setiap soal pilihan ganda.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Jawaban Singkat</td>
							<td class="p-2">
								Untuk soal jawaban singkat, cukup tuliskan jawaban yang benar di baris baru dengan
								prefix <b>@</b>. Hanya satu jawaban yang diperbolehkan untuk jenis soal ini.
							</td>
						</tr>
						<tr>
							<td class="p-2 align-top font-bold">Penjelasan</td>
							<td class="p-2">
								Setelah menuliskan soal dan jawaban, kamu bisa menambahkan penjelasan singkat yang
								akan ditampilkan setelah peserta menyelesaikan kuis tersebut. Mulai dengan kata
								<b>Exp:</b> di baris baru, diikuti dengan penjelasan yang relevan.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<a href="#ready" title="Lanjut ke Selesai" class="btn btn-lg btn-success mt-8 self-center">
			Saya Sudah Mengerti, Saya Siap!
		</a>
	</section>

	<section
		id="ready"
		class="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-4 px-4"
	>
		<h2 class="text-gradient text-center text-3xl font-black md:text-4xl">
			Sekarang, Siap Membuat Kuismu?
		</h2>
		<p class="mb-4 text-center text-lg text-gray-600 dark:text-gray-400">
			Semoga panduan ini membantu kamu memahami cara membuat kuis interaktif dengan SimQuiz. Jangan
			ragu untuk bereksperimen dan menyesuaikan kuismu sesuai kebutuhanmu!
		</p>

		<a href="#getting-started" title="Kembali ke Atas" class="btn btn-lg btn-info mt-8 self-center">
			Kembali ke Atas
		</a>
	</section>
</main>
<MainFooter />
