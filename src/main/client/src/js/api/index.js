
export const fetchDataApi = (url, method) => {
    return fetch(url, {
        method: method
    })
        .then(response => {
            return response.json()
        })
};