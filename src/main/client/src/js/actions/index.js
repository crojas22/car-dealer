import { fetchDataApi } from "../api";

export const getCarData = payload => {
    return {
        type: "GET_CAR_DATA",
        payload
    }
};

export const fetchDataAction = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => dispatch(getCarData(resp._embedded.vehicles)))
            .catch(error => console.log(error))
    }
};