import { combineReducers } from 'redux';
import {
    individualCarData, newCarData, usedCarData, wholeInventoryData
} from "./carData";
import { inventorySearchURL } from "./url";
import {
    inventoryColorSelected, inventoryLayout, inventorySortInfo, inventoryUI,
    inventoryUISelected, optionsSelected
} from "./inventoryUI";
import { compareVehicles } from "./compare";
import { snackBarStatus } from "./snackbar";

const reducer = combineReducers({
    newCarData,
    usedCarData,
    wholeInventoryData,
    individualCarData,
    inventorySearchURL,
    inventoryUI,
    inventoryUISelected,
    inventorySortInfo,
    inventoryLayout,
    inventoryColorSelected,
    optionsSelected,
    compareVehicles,
    snackBarStatus
});

export default reducer;