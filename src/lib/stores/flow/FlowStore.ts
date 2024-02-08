import type { CurrentUserObject } from '@onflow/fcl';
import { writable } from 'svelte/store';

export const user = writable<CurrentUserObject | { loggedIn: false; addr: null }>({
	loggedIn: false,
	addr: null
});
