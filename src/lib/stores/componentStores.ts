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
  // TODO: generate more 
  let id = 0;
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    addField: (type: 'Radio' | 'Checkbox') : void => {
      update(previousState => Object.assign({}, previousState, {
        [id++] : {
          component: base[type],
          type,
          props: {
            id: type + Math.floor(Math.random() * 10000),
            fields: [{value: 'working', checked: true, label: 'should be'}]
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
    }
  }
}

export const customForm = createCustomForm();