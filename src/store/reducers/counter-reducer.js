import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from '../actions/counter-action';

const initialState = {
    count: 0,
    demo: 'Ceci est un exemple',
    message: 'Le compteur est initialisé'
};

// Fonction "Reducer" qui sera déclanché lors des actions
// Génere un state sur base du state et de l'action
export const counterReducer = (state = initialState, action) => {

    // Utilisation d'un switch pour séparer les différentes actions
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state, // Permet d'evité la perte de valeur
                count: state.count + action.payload,
                message: `Le compteur est incrementé de ${action.payload}`
            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
                message: `Le compteur est décrementé de ${action.payload}`
            };
        case COUNTER_RESET:
            return {
                ...state,
                count: 0,
                message: 'Le compteur a été remis à zéro :o'
            };
            // Alternative: Remise a la valeur du state initial
            return { ...initialState };
        default:
            return state;
    }
};

export default counterReducer;