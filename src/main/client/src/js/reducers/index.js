import { combineReducers } from 'redux';
import {
    individualCarData, inventorySearchOptions, newCarData, usedCarData, wholeInventoryData,
    wholeInventoryLinks
} from "./carData";
import { inventorySearchURL } from "./url";
import { inventorySortInfo, inventoryUI, inventoryUISelected } from "./inventoryUI";

const reducer = combineReducers({
    newCarData,
    usedCarData,
    wholeInventoryData,
    wholeInventoryLinks,
    individualCarData,
    inventorySearchURL,
    inventoryUI,
    inventoryUISelected,
    inventorySortInfo
});

export default reducer;