import { ADD_TO_URL, REMOVE_FROM_URL, RESET_URL } from "../types/actionTypes";

export const inventorySearchURL = (state=["http://localhost:8080/api/v1/vehicles?"], action) => {
    switch (action.type) {
        case ADD_TO_URL:
            return action.payload;
        case REMOVE_FROM_URL:
            return action.payload;
        case RESET_URL:
            return [
                ...state.slice(0, 1)
            ];
        default:
            return state;
    }
};