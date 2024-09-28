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