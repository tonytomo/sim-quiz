// src/lib/theme/theme.ts
const theme = {
	text: {
		logo: 'text-3xl font-black tracking-tigher bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent select-none ',
		title: 'text-4xl font-medium tracking-wider ',
		subtitle: 'mt-4 text-md font-light text-gray-400 ',
		body: 'text-lg font-light ',
		small: 'text-md font-light '
	},
	container: {
		top: 'fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between p-2 bg-transparent ',
		bottom:
			'fixed bottom-0 left-0 right-0 z-50 flex flex-col items-end justify-between p-2 bg-transparent ',
		block: 'container mx-auto p-4 select-none ',
		flex: 'container mx-auto flex flex-row items-center justify-center gap-0 md:gap-4 ',
		box: 'h-12 w-12 cursor-pointer rounded-2xl text-2xl shadow-md hover:shadow-sm active:shadow-xs active:scale-90 duration-200 ',
		number: 'flex flex-row items-center justify-start p-0 gap-4 select-none ',
		answer: 'mt-4 flex flex-col items-start justify-center gap-2 '
	},
	icon: {
		box: 'mx-auto h-12 w-12 rounded-2xl text-md leading-12 font-black text-white '
	},
	input: {
		radio: 'flex cursor-pointer items-center gap-2 '
	},
	button: {
		base: 'mx-2 h-16 w-16 cursor-pointer rounded-2xl text-4xl text-white shadow-lg hover:shadow-md active:shadow-sm active:scale-90 duration-200 disabled:bg-none ',
		ghost:
			'h-8 w-8 cursor-pointer text-2xl text-zinc-600 bg-transparent dark:text-white active:scale-90 duration-200 disabled:bg-none ',
		blue: 'bg-sky-400 hover:bg-sky-300 disabled:bg-stone-300 dark:bg-sky-700 dark:hover:bg-sky-600 dark:disabled:bg-stone-700 ',
		orange:
			'bg-amber-400 hover:bg-amber-300 disabled:bg-stone-300 dark:bg-amber-700 dark:hover:bg-amber-600 dark:disabled:bg-stone-700 ',
		green:
			'bg-emerald-400 hover:bg-emerald-300  disabled:bg-stone-300 dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:disabled:bg-stone-700 ',
		black:
			'bg-zinc-600 hover:bg-zinc-500 disabled:bg-stone-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:disabled:bg-stone-700 '
	}
};

export default theme;
