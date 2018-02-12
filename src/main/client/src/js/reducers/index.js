import { combineReducers } from 'redux';
import {
    individualCarData, inventorySearchOptions, newCarData, usedCarData, wholeInventoryData,
    wholeInventoryLinks
} from "./carData";
import { inventorySearchURL } from "./url";

const reducer = combineReducers({
    newCarData,
    usedCarData,
    wholeInventoryData,
    wholeInventoryLinks,
    individualCarData,
    inventorySearchURL
});

export default reducer;