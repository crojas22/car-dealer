export const inventorySearchURL = (state=["http://localhost:8080/api/v1/vehicles?"], action) => {
    switch (action.type) {
        case "ADD_TO_URL":
            return [
                ...state,
                action.payload.address
            ];
        case "REMOVE_FROM_URL":
            return [
                ...state.slice(0, action.payload.index),
                ...state.slice(action.payload.index+1)
            ];
        case "RESET_URL":
            return [
                ...state.slice(0, 1)
            ];
        default:
            return state;
    }
};