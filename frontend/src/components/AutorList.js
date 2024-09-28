import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAutores } from '../actions/autorActions';

const AutorList = () => {
    const dispatch = useDispatch();
    const autores = useSelector((state) => state.autores);

    useEffect(() = {
        dispatch(getAutores());
    }, [dispatch]);

    return (
        <div>
            <h1>Lista de Libros</h1>
            
        </div>
    );
}

export default AutorList;
