// AutorList.js
import React, { useEffect, useState } from 'react';
import { getAutores } from '../actions/autorActions'

const AutorList = () => {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        const fetchAutores = async () => {
            try {
                const data = await getAutores();
                setAutores(data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchAutores()
    }, []);

    return (
        <div>
            <h1>Autor</h1>
            <ul>
                {autores.map(autor => (
                    <li key={autor.id}>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AutorList;
