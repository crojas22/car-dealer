import {
    ADD_OPTION_SELECTED,
    OPTION1, OPTION1_COLOR, OPTION1SELECTED, OPTION2, OPTION2_COLOR, OPTION2SELECTED, OPTION3, OPTION3SELECTED, OPTION4,
    OPTION4SELECTED,
    OPTION5, OPTION5SELECTED, REMOVE_OPTIONS_SELECTED, RESET_OPTION_SELECTED, RESET_OPTIONS, RESET_SELECTED,
    UPDATE_INVENTORY_LAYOUT,
    UPDATE_INVENTORY_SORT
} from "../types/actionTypes";

const initialState = {
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false
};

export const inventoryUI = (state = initialState, action) => {
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

export const inventoryColorSelected = (state = {option1: "", option2: ""}, action) => {
    switch (action.type) {
        case OPTION1_COLOR:
            return Object.assign({}, state, {
                option1: action.payload
            });
        case OPTION2_COLOR:
            return Object.assign({}, state, {
                option2: action.payload
            });
        default:
            return state;
    }
};

export const inventorySortInfo = (state={sortBy: "year", direction: "desc", index: 0}, action) => {
    switch (action.type) {
        case UPDATE_INVENTORY_SORT:
            return action.payload;
        default:
            return state;
    }
};

export const inventoryLayout = (state=false, action) => {
    switch (action.type) {
        case UPDATE_INVENTORY_LAYOUT:
            return action.payload;
        default:
            return state;
    }
};

export const optionsSelected = (state=[], action) => {
    switch (action.type) {
        case ADD_OPTION_SELECTED:
            return action.payload;
        case REMOVE_OPTIONS_SELECTED:
            return action.payload;
        case RESET_OPTION_SELECTED:
            return [];
        default:
            return state;
    }
};