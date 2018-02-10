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
            return action.payload._embedded.vehicles;
        default:
            return state;
    }
};

export const wholeInventoryLinks = (state={}, action) => {
    switch (action.type) {
        case "GET_INVENTORY_DATA":
            return action.payload._links;
        default:
            return state;
    }
};

export const individualCarData = (state={}, action) => {
    switch (action.type) {
        case "CAR_INFO":
            return action.payload;
        default:
            return state;
    }
};

export const inventorySearchOptions = (state={}, action) => {
    switch (action.type) {
        case "GET_SEARCH_OPTIONS":
            return action.payload;
        default:
            return state;
    }
};