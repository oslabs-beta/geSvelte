import { writable } from "svelte/store";
import * as base from '$lib/components/base';
import type { LabelValue } from "$lib/types";
// import type { BaseComponents } from "$lib/types";

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

function createCustomForm() {
  // TODO: a better system to create unique IDs
  let id = 0;
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    // TODO: update function to accept a parameter of props (provided by helper form)
    addField: (type: 'Radio' | 'Checkbox') : void => {
      update(previousState => Object.assign({}, previousState, {
        [id++] : {
          component: base[type],
          type,
          props: {
            // TODO: Use generated ID to assist with name/ID
            id: type + Math.floor(Math.random() * 10000),
            name: type + Math.floor(Math.random() * 10000),
            fields: [
              {value: 'working1', checked: true, label: 'should be1'},
              {value: 'working2', checked: true, label: 'should be2'},
              {value: 'working3', checked: true, label: 'should be3'},
            ],
            legend: "These are some test directions:"
          }
        }
      }))
    },
    addRadio: (type: 'Radio', fields: LabelValue[]) : void => {
      update((previousState) => Object.assign({}, previousState, { [id++] : { 
        component: base[type],
        type,
        fields
      }}))
    },
    addCheckbox: (type: 'Checkbox') : void => {
      update((previousState) => (Object.assign({}, previousState, { 
            [id++] : { 
              component: base[type],
              type,
              fields: [
                {value: 'test1', checked: false},
                {value: 'test2', checked: false},
              ] 
            }
      })));
    },
    set
  }
}

export const customForm = createCustomForm();