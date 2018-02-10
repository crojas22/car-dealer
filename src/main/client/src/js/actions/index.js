import { fetchDataApi } from "../api";

const getData = (payload, type) => {
    return {
        payload,
        type
    }
};


export const fetchDataAction = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => {
                dispatch(getData(resp.newVehicles.content, "NEW_CAR_DATA"));
                dispatch(getData(resp.usedVehicles.content, "USED_CAR_DATA"));
            })
            .catch(error => console.log(error))
    }
};

export const fetchData = (url, method, reducer) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => {
                dispatch(getData(resp, reducer))
            })
            .catch(error => console.log(error))
    }
};