export const newCarData = (state=[], action) => {
    switch (action.type) {
        case "NEW_CAR_DATA":
            return action.payload;
        default:
            return state;
    }
};

export const usedCarData = (state=[], action) => {
    switch (action.type) {
        case "USED_CAR_DATA":
            return action.payload;
        default:
            return state;
    }
};

export const wholeInventoryData = (state=[], action) => {
    switch (action.type) {
        case "GET_INVENTORY_DATA":
            return action.payload;
        default:
            return state;
    }
};

export const wholeInventoryLinks = (state={}, action) => {
    switch (action.type) {
        case "WHOLE_INVENTORY_LINKS":
            return action.payload;
        default:
            return state;
    }
};