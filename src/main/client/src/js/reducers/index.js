import { combineReducers } from 'redux';
import { newCarData, usedCarData } from "./carData";

const reducer = combineReducers({
    newCarData,
    usedCarData
});

export default reducer;