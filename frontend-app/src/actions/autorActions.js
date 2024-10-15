import axios from "axios"

const API_URL = "http://127.0.0.1:8000/api"


export const getAllAutores = () => async() => {
    try {
        const response = await axios.get(`${API_URL}/autores/`);
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const getAutoresById = (id) => async () => {
    try {
        const response = await axios.get(`${API_URL}/autores/${id}/`);
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}
