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