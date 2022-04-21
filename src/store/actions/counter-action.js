// Constante avec le nom des différentes actions
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const COUNTER_RESET = 'counter/reset';


// Méthode pour générer les objets "action"
// - Fonction qui crée l'action "Increment"
export const counterIncrement = (value) => {
    return {
        type: COUNTER_INCREMENT,
        payload: value
    };
};

// - Fonction lambda qui crée l'action "Decrement"
export const counterDecrement = (value) => ({
    type: COUNTER_DECREMENT,
    payload: value
});

// - Fonction lamdba qui crée l'action "reset"
export const counterReset = () => ({
    type: COUNTER_RESET
});