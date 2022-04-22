import { PERSON_ADD, PERSON_REMOVE } from '../actions/person-action';

const initialState = {
    list: [],
    count: 0
};

export const personReducer = (state = initialState, action) => {
    switch (action.type) {
        case PERSON_ADD:
            return {
                ...state,
                list: [...state.list, action.payload],
                count: state.count + 1
            };
        case PERSON_REMOVE:
            const list = state.list.filter(p => p.id !== action.payload);
            return {
                ...state,
                list,
                count: list.length
            };
        default:
            return state;
    }
};

export default personReducer;