import { AutoSizer, List } from 'react-virtualized';

// FIXME Remove this and replace by store data
const people = [
    { id: '12542', firstname: 'Zaza', lastname: 'Vanderquack' },
    { id: '51235', firstname: 'Della', lastname: 'Duck' },
    { id: '51535', firstname: 'Balthazar', lastname: 'Picsou' },
    { id: '42542', firstname: 'Gontran', lastname: 'Bonheur' }
];

const PersonRow = ({ key, index }) => {
    const person = people[index];

    return (
        <li key={key}>
            {console.log(index)}
            {person.firstname} {person.lastname}
        </li>
    );
};

const PersonList = () => {
    return (
        <>
            <h3>List des personnes</h3>
            <AutoSizer disableHeight >
                {({ width }) => (
                    <List
                        height={100}
                        rowCount={people.length}
                        rowHeight={20}
                        rowRenderer={PersonRow}
                        width={width}
                    />
                )}
            </AutoSizer>
        </>
    );
};

export default PersonList;