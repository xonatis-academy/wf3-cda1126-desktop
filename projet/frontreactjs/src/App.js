import { useState, useContext } from 'react';
import ServiceContext from './common/ServiceContext';

function App() {
    const [searchText, setSearchText] = useState('');
    const [entries, setEntries] = useState([]);
    const serviceContext = useContext(ServiceContext);

    const handleChange = (event) => {
        setSearchText(event.target.value);
    }

    const transfertToEntries = (data) => {
        let nouveauTableau = data.map(x => Object.values(x).join(' - '));
        setEntries(nouveauTableau);
    }

    const handleList = () => {
        serviceContext.apiService.getDataFromList((data) => {
            transfertToEntries(data)
        });
    }

    const handleSearch = () => {
        serviceContext.apiService.getDataFromSearch(searchText, (data) => {
            transfertToEntries(data)
        });
    }

    return (
        <main>
            <h1>Annuaire</h1>
            <input type="text" value={searchText} onChange={handleChange} />
            <button onClick={handleSearch}>Chercher</button>
            <button onClick={handleList}>Tout</button>
            <div>
                {entries.map(x => <div>{x}</div>)}
            </div>
        </main>
    );
}

export default App;
