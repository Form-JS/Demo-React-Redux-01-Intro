import { useSelector } from 'react-redux';
import { AutoSizer, List } from 'react-virtualized';


const PersonList = () => {
    const count = useSelector(state => state.person.count);
    const people = useSelector(state => state.person.list);

    const personRow = ({ key, index }) => {
        const person = people[index];

        return (
            <li key={key}>
                {person.firstname} {person.lastname}
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