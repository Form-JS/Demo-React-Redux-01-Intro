import { useDispatch, useSelector } from 'react-redux';
import { AutoSizer, List } from 'react-virtualized';
import { personRemove } from '../../store/actions/person-action';
import style from './person-list.module.css';


const PersonList = () => {
    const count = useSelector(state => state.person.count);
    const people = useSelector(state => state.person.list);
    const dispatch = useDispatch();

    const personRow = ({ key, index }) => {
        const person = people[index];

        const handleDelete = () => {
            dispatch(personRemove(person.id));
        };

        return (
            <li key={key} className={style.listItem}>
                <p>
                    {person.firstname} {person.lastname}
                    <span onClick={handleDelete}>&#9587;</span>
                </p>
            </li>
        );
    };

    return (
        <>
            <h3>List des personnes</h3>
            <AutoSizer disableHeight >
                {({ width }) => (
                    <List
                        height={100}
                        rowCount={count}
                        rowHeight={20}
                        rowRenderer={personRow}
                        width={width}
                    />
                )}
            </AutoSizer>
        </>
    );
};

export default PersonList;