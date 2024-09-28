const libroReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LIBROS_SUCCESS':
            return action.payload
        default:
            return state
    }
};

export default libroReducer;