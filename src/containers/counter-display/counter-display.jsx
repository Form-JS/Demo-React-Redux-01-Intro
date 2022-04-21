import { useSelector } from 'react-redux';

const CounterDisplay = () => {
    // Récuperation des données contenu dans le "state" du store
    const { count, message } = useSelector(state => state.counter);

    return (
        <div>
            <p>La valeur du compteur est de {count}</p>
            <p>{message}</p>
        </div>
    );
};

export default CounterDisplay;