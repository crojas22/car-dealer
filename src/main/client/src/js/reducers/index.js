import { combineReducers } from 'redux';
import {
    individualCarData, inventorySearchOptions, newCarData, usedCarData, wholeInventoryData,
    wholeInventoryLinks
} from "./carData";

const reducer = combineReducers({
    newCarData,
    usedCarData,
    wholeInventoryData,
    wholeInventoryLinks,
    individualCarData,
    inventorySearchOptions
});

export default reducer;