import { writable } from 'svelte/store';
import type { FlyoutSettings } from './components/types';

function flyoutService() {
	const { subscribe, set, update } = writable<FlyoutSettings>({});
	return {
		subscribe,
		set,
		update,

		/* Open Drawer */
		open: (newSettings?: FlyoutSettings) =>
			update(() => {
				return { open: true, ...newSettings };
			}),

		close: () =>
			update((store) => {
				store.open = false;
				return store;
			})
	};
}

export const flyoutStore = flyoutService();
