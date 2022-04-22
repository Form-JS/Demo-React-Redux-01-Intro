import { nanoid } from 'nanoid';

// Type d'action
export const PERSON_ADD = 'person/add';
export const PERSON_REMOVE = 'person/remove';

// Générateur d'objet "action"
export const personAdd = ({ firstname, lastname }) => ({
    type: PERSON_ADD,
    payload: {
        id: nanoid(),
        firstname,
        lastname
    }
});

export const personRemove = (personId) => ({
    type: PERSON_REMOVE,
    payload: personId
});