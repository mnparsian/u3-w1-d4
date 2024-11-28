

import { useState, useEffect } from "react";
import { Card, Col, Container, Row, Dropdown } from "react-bootstrap";
import SingleBook from "./SingleBook";

const AllTheBooks = () => {
  
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("fantasy");

 
  const genres = ["fantasy", "history", "romance", "horror", "scifi"];

  useEffect(() => {
    const loadBooks = async () => {
      try {
        
        const module = await import(`../data/${selectedGenre}.json`);
        setBooks(module.default);
      } catch (error) {
        console.error("Error loading books:", error);
        setBooks([]); 
      }
    };

    loadBooks();
  }, [selectedGenre]); 

  return (
    <Container className="mt-4">
      {}
      <Dropdown className="mb-4">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select Genre
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {genres.map((genre) => (
            <Dropdown.Item
              key={genre}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {}
      <Row>
        {books.map((book) => SingleBook(book))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
