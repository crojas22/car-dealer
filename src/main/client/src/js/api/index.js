
export const fetchDataApi = (url, method) => {
    return fetch(url, {
        method: method
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
};