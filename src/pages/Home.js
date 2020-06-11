import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Book = (props) => {
  return <div>title : {props.title}</div>;
};

export default ({ token }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const action = async () => {
      try {
        const { data } = await axios.get('https://api.marktube.tv/v1/book', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(data);
        console.log(data);
      } catch (e) {
        console.log(e.response.data.error);
      }
    };
    action();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {books.map((book) => (
        <Book key={book.bookId} title={book.title} />
      ))}
    </div>
  );
};
