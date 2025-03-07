// src/lib/theme/theme.ts
const theme = {
	text: {
		logo: 'text-3xl font-black tracking-tigher bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent select-none ',
		title: 'text-4xl font-medium tracking-wider ',
		subtitle: 'mt-4 text-md font-light text-stone-500 ',
		body: 'text-lg font-light ',
		small: 'text-md font-light ',
		bold: 'text-md font-bold ',
		paragraph: 'my-2 text-md font-light indent-8 text-justify ',
		timer:
			'text-md text-end px-2 py-1 border border-stone-400 bg-stone-200 dark:border-stone-500 dark:bg-stone-700 rounded-md ',
		timerRed:
			'text-md text-end px-2 py-1 border border-red-300 bg-red-100 dark:border-red-800 dark:bg-red-950 rounded-md '
	},
	container: {
		top: 'fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between p-2 bg-transparent ',
		bottom:
			'fixed bottom-0 left-0 right-0 z-50 flex flex-col items-end justify-between p-2 bg-transparent ',
		block: 'container mx-auto p-4 select-none ',
		flex: 'container mx-auto flex flex-row items-center justify-center gap-0 md:gap-4 ',
		box: 'h-10 w-10 cursor-pointer rounded-2xl text-2xl shadow-md hover:shadow-sm active:shadow-xs active:scale-90 duration-200 ',
		number: 'flex flex-row items-center justify-start gap-4 select-none ',
		answer: 'mt-4 flex flex-col items-start justify-center gap-2 '
	},
	icon: {
		box: 'mx-auto h-10 w-10 rounded-2xl text-sm leading-10 font-black text-white '
	},
	input: {
		radio: 'flex cursor-pointer items-center gap-2 '
	},
	button: {
		base: 'mx-2 h-10 w-10 cursor-pointer rounded-2xl text-2xl text-white shadow-lg hover:shadow-md active:shadow-sm active:scale-90 duration-200 disabled:bg-none disabled:bg-stone-200 dark:disabled:bg-stone-900 ',
		ghost:
			'h-8 w-8 cursor-pointer text-2xl text-zinc-600 bg-transparent dark:text-white active:scale-90 duration-200 disabled:bg-none ',
		blue: 'bg-blue-500 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 ',
		orange: 'bg-yellow-500 hover:bg-yellow-400 dark:bg-yellow-700 dark:hover:bg-yellow-600 ',
		green: 'bg-green-500 hover:bg-green-400  dark:bg-green-700 dark:hover:bg-green-600 ',
		black: 'bg-stone-500 hover:bg-stone-400 dark:bg-stone-700 dark:hover:bg-stone-600 '
	}
};

export default theme;
