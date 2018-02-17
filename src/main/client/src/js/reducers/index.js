import { combineReducers } from 'redux';
import {
    individualCarData, newCarData, usedCarData, wholeInventoryData,
    wholeInventoryLinks
} from "./carData";
import { inventorySearchURL } from "./url";
import {
    inventoryColorSelected, inventoryLayout, inventorySortInfo, inventoryUI,
    inventoryUISelected, optionsSelected
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
    inventoryColorSelected,
    optionsSelected
});

export default reducer;