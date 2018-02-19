import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from "../types/actionTypes";

export const compareVehicles = (state=[], action) => {
    switch (action.type) {
        case ADD_TO_COMPARE:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_FROM_COMPARE:
            return state.filter(each => each.id !== action.payload.id);
        default:
            return state;
    }
};