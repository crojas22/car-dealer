import { fetchDataApi } from "../api";
import { NEW_CAR_DATA, USED_CAR_DATA } from "../types/actionTypes";

export const setData = (payload, type) => {
    return {
        payload,
        type
    }
};

export const resetData = type => {
    return {
        type
    }
};

export const searchOptionStatus = (bool, type) => {
    return {
        bool,
        type
    }
};

export const fetchDataAction = (url, method) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => {
                dispatch(setData(resp.newVehicles.content, NEW_CAR_DATA));
                dispatch(setData(resp.usedVehicles.content, USED_CAR_DATA));
            })
            .catch(error => console.log(error))
    }
};

export const fetchData = (url, method, reducer) => {
    return (dispatch) => {
        fetchDataApi(url, method)
            .then(resp => {
                dispatch(setData(resp, reducer))
            })
            .catch(error => console.log(error))
    }
};