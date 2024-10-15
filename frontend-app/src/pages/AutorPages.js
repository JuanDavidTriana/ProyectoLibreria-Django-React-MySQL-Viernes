import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AutorPages.css"

const AutorPage = () => {
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        const cargarAutores = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/autores/');
                setAutores(response.data);
            } catch (error) {
                console.error("Error al cargar los autores", error);
            }
        };

        cargarAutores();
    }, []);

    return (
        <div className="container">
            <header>
                <h1>Harbar</h1>
                <p>Proyecto de gestión de autores</p>
            </header>
            <main>
                <h2>Autores</h2>
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
            </main>
            <footer>
                <p>Desarrollado por <a href="https://github.com/your-username">Tu nombre</a></p>
            </footer>
        </div>
    );

};

export default AutorPage;

