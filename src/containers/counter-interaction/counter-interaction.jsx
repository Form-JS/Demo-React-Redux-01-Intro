import ButtonAction from '../../components/button-action/button-action';
import PropTypes from 'prop-types';
import { counterDecrement, counterIncrement } from '../../store/actions/counter-action';
import { useDispatch } from 'react-redux';

const CounterInteraction = ({ step }) => {
    // Récuperation du "dispatch" pour envoyer des actions au store
    const dispatch = useDispatch();

    const handleIncrement = () => {
        // Génération de l'objet "action"
        const action = counterIncrement(step);
        // Envoi l'action au store
        dispatch(action);
    };

    const handleDecrement = () => {
        // Génération de l'action et envoi vers le store
        dispatch(counterDecrement(step));
    };

    return (
        <div>
            <ButtonAction onClick={handleIncrement} direction='up' step={step} />
            <ButtonAction onClick={handleDecrement} direction='down' step={step} />
        </div>
    );
};

CounterInteraction.propTypes = {
    step: PropTypes.number
};

CounterInteraction.defaultProps = {
    step: 1
};

export default CounterInteraction;