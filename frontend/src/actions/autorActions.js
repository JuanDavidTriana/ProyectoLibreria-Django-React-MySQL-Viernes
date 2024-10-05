import axios from "axios";
import api from "../api/api";

const API_URL = api

export const getAutores = () => async () =>{
    try {
        const response = await axios.get(`${API_URL}/autores/`);
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const getAutoresById = () => async (id) =>{
    try {
        const response = await axios.get(`${API_URL}/autores/${id}/`);
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const deleteAutores = () => async (id) =>{
    try {
        const response = await axios.delete(`${API_URL}/autores/${id}/`);
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const createAutores = () => async (autor) =>{
    try {
        const formData = new FormData();
        formData.append('nombre', autor.nombre)
        formData.append('nacionalidad', autor.nacionalidad)
        formData.append('fecha_nacimiento', autor.fecha_nacimiento)

        const response = await axios.post(`${API_URL}/autores/`,formData,{
            headers:{
                'Content-Type': "multipart/from-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const updataAutores = () => async (id,autor) =>{
    try {
        const formData = new FormData();
        formData.append('nombre', autor.nombre)
        formData.append('nacionalidad', autor.nacionalidad)
        formData.append('fecha_nacimiento', autor.fecha_nacimiento)

        const response = await axios.put(`${API_URL}/autores/${id}/`,formData,{
            headers:{
                'Content-Type': "multipart/from-data"
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}