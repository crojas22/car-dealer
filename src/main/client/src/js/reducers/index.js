import { combineReducers } from 'redux';
import {
    individualCarData, inventorySearchOptions, newCarData, usedCarData, wholeInventoryData,
    wholeInventoryLinks
} from "./carData";
import { inventorySearchURL } from "./url";
import { inventoryUI, inventoryUISelected } from "./inventoryUI";

const reducer = combineReducers({
    newCarData,
    usedCarData,
    wholeInventoryData,
    wholeInventoryLinks,
    individualCarData,
    inventorySearchURL,
    inventoryUI,
    inventoryUISelected
});

export default reducer;