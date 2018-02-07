import { combineReducers } from 'redux';
import { individualCarData, newCarData, usedCarData, wholeInventoryData, wholeInventoryLinks } from "./carData";

const reducer = combineReducers({
    newCarData,
    usedCarData,
    wholeInventoryData,
    wholeInventoryLinks,
    individualCarData
});

export default reducer;