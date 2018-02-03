// const urlApi = rest => `http://localhost:8080/api/v1/${rest}`;

export const fetchDataApi = (url, method) => {
    return fetch(url, {
        method: method
    })
        .then(response => response.json())
};