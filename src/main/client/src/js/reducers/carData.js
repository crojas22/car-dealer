export const carData = (state=[], action) => {
    switch (action.type) {
        case "GET_CAR_DATA":
            return action.payload;
        default:
            return state;
    }
};