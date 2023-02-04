import { writable } from "svelte/store";

export const componentStore = writable({}, () => {
  console.log('got a subscriber');
  return () => console.log('no more subscribers')
})