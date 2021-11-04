export default class ApiService {
    getDataFromList(callback) {
        fetch('http://localhost:4000')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                callback(data);
            })
    }

    getDataFromSearch(text, callback) {
        fetch('http://localhost:4000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text
            })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                callback(data);
            })
    }
}