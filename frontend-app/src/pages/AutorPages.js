import React, { useState, useEffect } from 'react';
import { getAllAutores } from '../actions/autorActions';
import "./AutorPages.css"

const AutorPage = () => {
    const [setAutores] = useState([]);

    useEffect(() => {
        cargarAutores();
    }, []);

    const cargarAutores = async () => {
        try {
            const data = await getAllAutores();
            console.log(data); 
            setAutores(data);
        } catch (error) {
            console.error("Error al cargar los autores", error);
        }
    };

    const autores = [
        { id: 1, nombre: "Juan", nacionalidad: "Mexicano", fecha_nacimiento: "1990-01-01" },
        { id: 2, nombre: "Pedro", nacionalidad: "Argentino", fecha_nacimiento: "1995-01-01" },
        { id: 3, nombre: "Luis", nacionalidad: "Colombiano", fecha_nacimiento: "1992-01-01" },
    ];

    return (
        <div>
            <h1>Autores</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Nacionalidad</th>
                        <th>Fecha de Nacimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map(autor => (
                        <tr key={autor.id}>
                            <td>{autor.id}</td>
                            <td>{autor.nombre}</td>
                            <td>{autor.nacionalidad}</td>
                            <td>{autor.fecha_nacimiento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default AutorPage;

