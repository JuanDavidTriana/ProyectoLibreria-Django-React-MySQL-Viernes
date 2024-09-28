// LibroList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLibros } from '../actions/libroActions';

const LibroList = () => {
  const dispatch = useDispatch();
  const libros = useSelector((state) => state.libros);

  useEffect(() => {
    dispatch(getLibros());
  }, [dispatch]);

  return (
    <div>
      <h2>Libros</h2>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>{libro.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default LibroList;
