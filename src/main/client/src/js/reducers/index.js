import { combineReducers } from 'redux';
import { newCarData, usedCarData, wholeInventoryData, wholeInventoryLinks } from "./carData";

const reducer = combineReducers({
    newCarData,
    usedCarData,
    wholeInventoryData,
    wholeInventoryLinks
});

export default reducer;