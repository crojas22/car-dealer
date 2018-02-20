import { ADD_MESSAGE_SNACKBAR, RESET_MESSAGE_SNACKBAR } from "../types/actionTypes";

export const snackBarStatus = (state={show:false, message: ""}, action) => {
    switch (action.type) {
        case ADD_MESSAGE_SNACKBAR:
            return {
                show: action.payload.show,
                message: action.payload.message
            };
        case RESET_MESSAGE_SNACKBAR:
            return {
                show: false,
                message: ""
            };
        default:
            return state;
    }
};