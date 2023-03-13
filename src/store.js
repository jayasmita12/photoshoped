import { writable } from 'svelte/store';
export const modalClose = writable(false);
export const generateBtn = writable(false);
export const isLoggedin = writable(false)
export const user = writable({})