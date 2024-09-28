const autorReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_AUTORES_SUCCESS':
            return action.payload
        default:
            return state
    }
};

export default autorReducer;