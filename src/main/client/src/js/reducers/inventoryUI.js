import {
    OPTION1, OPTION1SELECTED, OPTION2, OPTION2SELECTED, OPTION3, OPTION3SELECTED, OPTION4, OPTION4SELECTED,
    OPTION5, OPTION5SELECTED, RESET_OPTIONS, RESET_SELECTED
} from "../types/actionTypes";

const initialState = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false
};

export const inventoryUI = (state = initialState,action) => {
    switch (action.type) {
        case OPTION1:
            return Object.assign({}, state, {
                option1 : action.bool
            });
        case OPTION2:
            return Object.assign({}, state, {
                option2 : action.bool
            });
        case OPTION3:
            return Object.assign({}, state, {
                option3 : action.bool
            });
        case OPTION4:
            return Object.assign({}, state, {
                option4 : action.bool
            });
        case OPTION5:
            return Object.assign({}, state, {
                option5 : action.bool
            });
        case RESET_OPTIONS:
            return initialState;
        default :
            return state;
    }
};

const initialStateSelected = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false
};

export const inventoryUISelected = (state = initialStateSelected,action) => {
    switch (action.type) {
        case OPTION1SELECTED:
            return Object.assign({}, state, {
                option1 : action.bool
            });
        case OPTION2SELECTED:
            return Object.assign({}, state, {
                option2 : action.bool
            });
        case OPTION3SELECTED:
            return Object.assign({}, state, {
                option3 : action.bool
            });
        case OPTION4SELECTED:
            return Object.assign({}, state, {
                option4 : action.bool
            });
        case OPTION5SELECTED:
            return Object.assign({}, state, {
                option5 : action.bool
            });
        case RESET_SELECTED:
            return initialStateSelected;
        default :
            return state;
    }
};