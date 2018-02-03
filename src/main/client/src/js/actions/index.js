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

const getWholeInventory = payload => {
    return {
        type: "GET_INVENTORY_DATA",
        payload
    }
};

const getWholeInventoryNavLinks = payload => {
    return {
        type: "WHOLE_INVENTORY_LINKS",
        payload
    }
};

export const fetchDataAction = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => {
                dispatch(getNewCarData(resp.newVehicles.content));
                dispatch(getUsedCarData(resp.usedVehicles.content));
            })
            .catch(error => console.log(error))
    }
};

export const fetchCarInventory = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => {
                console.log(resp)
                dispatch(getWholeInventory(resp._embedded.vehicles));
                dispatch(getWholeInventoryNavLinks(resp._links));
            })
            .catch(error => console.log(error))
    }
};