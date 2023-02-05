import { writable } from "svelte/store";
import * as base from '$lib/components/base'

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

// export const radioTestStore = writable({
//   fields: []
// });

// export const checkboxTestStore = writable({
//   fields: []
// });

function createCustomForm() {
  let id = 0;
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    addRadio: () => {
      update((previousState) => Object.assign({}, previousState, { [id++] : { 
        type: base.Radio,
        fields: [{value: 'option1', label: 'Option 1'}, {value: 'option2', label: 'Option 2'}] 
      }}))
      console.log('added radio')
      // return base.Radio;
    },
    addCheckbox: () => {
      update((previousState) => Object.assign({}, previousState, { [id++] : { 
        type: base.Checkbox,
        fields: [{value: 'test1', checked: true}, {value: 'test2', checked: false}] 
      }}))
      console.log('added Checkbox')
      // return base.Radio;
    }
  }
}

export const customForm = createCustomForm();