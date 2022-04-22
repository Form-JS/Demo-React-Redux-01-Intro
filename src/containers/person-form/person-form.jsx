import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { personAdd } from '../../store/actions/person-action';

const personSchema = yup.object({
    firstname: yup.string().trim().required().min(2),
    lastname: yup.string().trim().required().min(2)
}).required();

const PersonForm = () => {
    const dispatch = useDispatch();

    const { register, handleSubmit, reset, formState: { errors }, setFocus } = useForm({
        resolver: yupResolver(personSchema),
        reValidateMode: 'onSubmit'
    });

    const onSubmit = (data) => {
        dispatch(personAdd(data));

        setFocus('firstname');
        reset();
    };

    return (
        <>
            {console.log(errors)}
            <h3>Formulaire d'ajout de personne</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type='text' {...register('firstname')}
                        placeholder='Prenom' defaultValue='' />
                    <input type='text' {...register('lastname')}
                        placeholder='Nom' defaultValue='' />
                    <button type='submit'>Ajouter</button>
                </div>
                <div>
                    {(errors.firstname || errors.lastname) && <span>Erreur dans le formulaire</span>}
                    {/* {Object.keys(errors).length !== 0 && <span>Erreur dans le formulaire</span>} */}
                </div>
            </form>
        </>
    );
};

export default PersonForm;