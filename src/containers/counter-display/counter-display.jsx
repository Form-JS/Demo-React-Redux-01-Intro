import { useSelector } from 'react-redux';

const CounterDisplay = () => {
    // Récuperation des données contenu dans le "state" du store
    const count = useSelector(state => state.counter.count);

    return (
        <div>
            <p>La valeur du compteur est de {count}</p>
        </div>
    );
};

export default CounterDisplay;