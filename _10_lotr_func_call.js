import React, { useState, useEffect } from "react";
import lotr from "./api/lotr";
// import dog from './api/dog';

const LotrCharacters = (props) => {
  const [stateBooks, setBooks] = useState([]);

  useEffect(() => {
    const resp = lotr
      .get(
        "book"
        // , {
        //     params: { query: term}
        //   }
      )
      .then((resp) => {
        setBooks(resp.data.docs);
        console.log(stateBooks);
      })
      .catch((err) => {
        console.error("err for some reason");
      });
  }, []);

  const books = stateBooks.map((book) => {
    return <li key={book._id}>{book.name}</li>;
  });

  return <ul>{books}</ul>;
};

export default LotrCharacters;
