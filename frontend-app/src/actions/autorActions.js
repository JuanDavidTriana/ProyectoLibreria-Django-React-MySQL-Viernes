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
export const createAutores = () => async(autor) => {
    const formData = new FormData();
    formData.append("nombre", autor.nombre);
    formData.append("nacionalidad", autor.nacionalidad);
    formData.append("fecha_nacimiento", autor.fecha_nacimiento);

    try {
        const response = await axios.post(`${API_URL}/autores/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const updateAutores = () => async(id, autor) => {
    const formData = new FormData();
    formData.append("nombre", autor.nombre);
    formData.append("nacionalidad", autor.nacionalidad);
    formData.append("fecha_nacimiento", autor.fecha_nacimiento);

    try {
        const response = await axios.put(`${API_URL}/autores/${id}/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const deleteAutores = () => async(id) => {
    try {
        const response = await axios.delete(`${API_URL}/autores/${id}/`);
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}
