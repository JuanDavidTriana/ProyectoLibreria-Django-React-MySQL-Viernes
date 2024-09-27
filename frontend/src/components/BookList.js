import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/libros/')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Libros</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.titulo} - {book.autor.nombre} (${book.precio})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
