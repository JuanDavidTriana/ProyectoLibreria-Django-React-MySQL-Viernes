import api from "../api/api";

export const getLibro = () => async (dispatch) =>{
    try {
        const response = await api.get('/libros/');
        dispatch({ type: 'FETCH_AUTORES_SUCCESS', payload:response.data});
    } catch (error) {
        console.error(error)
    }
}