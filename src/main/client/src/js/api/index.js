const urlApi = rest => `http://localhost:8080/api/v1/${rest}`;

export const fetchDataApi = (url, method) => {
    return fetch(urlApi(url), {
        method: method
    })
        .then(resp => resp.json())
};