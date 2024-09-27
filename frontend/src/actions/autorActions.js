import api from "../api/api";

export const getAutores = () => async (dispatch) =>{
    try {
        const response = await api.get('/autores/');
        dispatch({ type: 'FETCH_AUTORES_SUCCESS', payload:response.data});
    } catch (error) {
        console.error(error)
    }
}