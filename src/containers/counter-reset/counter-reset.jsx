import { useDispatch, useSelector } from 'react-redux';
import { counterReset } from '../../store/actions/counter-action';

const CounterReset = () => {

    // Récuperation de la valeur "count" contenu dans le state du store
    const count = useSelector(state => state.counter.count);

    // Récuperation du "dispach" pour envoyer des actions au store
    const dispatch = useDispatch();

    const handleReset = () => {
        // Envoi de l'action reset
        dispatch(counterReset());
    };

    return (
        <div>
            <button onClick={handleReset}
                disabled={count === 0} >Remise à Zero du compteur</button>
        </div>
    );
};

export default CounterReset;