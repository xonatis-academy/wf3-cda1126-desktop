import { useState, useContext } from 'react';
import ServiceContext from './common/ServiceContext';

function App() {
    const [searchText, setSearchText] = useState('');
    const serviceContext = useContext(ServiceContext);

    const handleChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleList = () => {
        serviceContext.apiService.getDataFromList(() => {
            console.log("Bonjour");
        });
    }

    const handleSearch = () => {
        console.log(searchText);
    }

    return (
        <main>
            <h1>Annuaire</h1>
            <input type="text" value={searchText} onChange={handleChange} />
            <button onClick={handleSearch}>Chercher</button>
            <button onClick={handleList}>Tout</button>
        </main>
    );
}

export default App;
