import { fetchDataApi } from "../api";

const getNewCarData = payload => {
    return {
        type: "NEW_CAR_DATA",
        payload
    }
};

const getUsedCarData = payload => {
    return {
        type: "USED_CAR_DATA",
        payload
    }
};

export const fetchDataAction = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(response => response.json())
            .then(resp => {
                dispatch(getNewCarData(resp.newVehicles.content));
                dispatch(getUsedCarData(resp.usedVehicles.content));
            })
            .catch(error => console.log(error))
    }
};