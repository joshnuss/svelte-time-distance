import { readable } from 'svelte/store'

export const now = readable(new Date(), (set) => {
	const update = () => set(new Date())
	const interval = setInterval(update, 60000)

	return clearInterval(interval)
})
