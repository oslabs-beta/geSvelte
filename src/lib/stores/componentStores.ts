import { writable } from "svelte/store";

const fields: string[] = [];
/**
 * TODO: will a component always have a fields property?
 */
export const componentStore = writable({
  fields
}, () => {
  console.log('componentStore got a subscriber');
  return () => console.log('componentStore has no more subscribers')
})

export const radioTestStore = writable({
  fields: []
});

export const checkboxTestStore = writable({
  fields: []
});