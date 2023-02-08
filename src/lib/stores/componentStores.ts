import { writable } from "svelte/store";
import * as base from '$lib/components/base';


function createCustomForm() {
  // TODO: a better system to create unique IDs
  let id = 0;
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    // TODO: update function to accept a parameter of props (provided by helper form)
    addField: (type: 'Radio' | 'Checkbox' | 'Input') : void => {
      update(previousState => {
        const newId = ++id;
        const initialProps = Object.assign({}, structuredClone(defaultProps[type]), {name: type + `-${newId}`, id: newId});
        const updatedState = Object.assign({}, previousState, {
          [newId] : {
            component: base[type],
            type,
            props: initialProps
          }
        });

        return updatedState;
      })
    },
    addInput: (id: number, newInput: any) : void => {
      update(previousState => {
        const lookup = id as unknown as keyof typeof updatedState;
        const updatedState = Object.assign({}, previousState);

        updatedState[lookup].props.fields.push(newInput);

        return updatedState;
      })
    },
    deleteField: (id: number) : void => {
      update(previousState => {
        const updatedState = Object.assign({}, previousState);
        // TODO: properly cast the type of id
        delete updatedState[id as unknown as keyof typeof updatedState];
        
        return updatedState;
      })
    },
    deleteInput: (id: number, deletedIndex: number) : void => {
      update(previousState => {
        const lookup = id as unknown as keyof typeof updatedState;
        const updatedState = Object.assign({}, previousState);

        console.log(id, deletedIndex)
        const arrWithoutDeleted = [];

        for (let i = 0; i < updatedState[lookup].props.fields.length; ++i) {
          if (i !== deletedIndex) arrWithoutDeleted.push(updatedState[lookup].props.fields[i])
        }

        updatedState[lookup].props.fields = arrWithoutDeleted;

        return updatedState;
      })
    },
    set
  }
}

export const defaultProps = {
  'Radio': {
    legend: 'Write your directions here.',
    fields: [
      {value: 'option1', label: 'Option 1'},
      {value: 'option2', label: 'Option 2'},
    ],
  },
  'Checkbox': {
    fields: [
      { value: 'check1', label: 'Check 1', checked: false},
      { value: 'check2', label: 'Check 2', checked: false},
      { value: 'check3', label: 'Check 3', checked: false},
    ],
  },
  'Input': {
    placeholder: 'Default placeholder', 
    labelClass: '', 
    labelText: 'Default label', 
    inputType: 'text', 
  }
};

export const customForm = createCustomForm();