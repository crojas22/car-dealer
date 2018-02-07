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

export const fetchCarInventory = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => {
                dispatch(getData(resp._embedded.vehicles, "GET_INVENTORY_DATA"));
                dispatch(getData(resp._links, "WHOLE_INVENTORY_LINKS"));
            })
            .catch(error => console.log(error))
    }
};

export const fetchCarInfo = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => dispatch(getData(resp, "CAR_INFO")))
            .catch(error => console.log(error))
    }
};