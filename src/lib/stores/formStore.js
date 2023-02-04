import { writable } from 'svelte/store';

export const loginFormStore = writable({
	username: {
		placeholder: 'username sdklfgj',
		label: 'store Username',
		color: 'red'
	},
	password: {
		placeholder: 'pw sdklfgj',
		label: 'store Password',
		color: 'blue'
	}
});
