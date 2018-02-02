
export const getCarData = payload => {
    return {
        type: "GET_CAR_DATA",
        payload
    }
};

export const fetchDataAction = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => console.log(resp))
            .catch(error => console.log(error.message))
    }
};