import { combineReducers } from 'redux';
import {
    individualCarData, newCarData, usedCarData, wholeInventoryData,
    wholeInventoryLinks
} from "./carData";
import { inventorySearchURL } from "./url";
import {
    inventoryColorSelected, inventoryLayout, inventorySortInfo, inventoryUI,
    inventoryUISelected
} from "./inventoryUI";

const reducer = combineReducers({
    newCarData,
    usedCarData,
    wholeInventoryData,
    wholeInventoryLinks,
    individualCarData,
    inventorySearchURL,
    inventoryUI,
    inventoryUISelected,
    inventorySortInfo,
    inventoryLayout,
    inventoryColorSelected
});

export default reducer;