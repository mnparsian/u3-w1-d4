/* import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({books}) =>(
    <Container className="mt-4">
        <Row>
        {books.map((book) => (
                <SingleBook key={book.asin} book={book} />
            ))}
        </Row>
    </Container>
)
export default BookList */
import { Container, Row, InputGroup, Button, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    selectedBooks: [], 
    searchTerm: "",     
  };

  
  componentDidMount() {
    const { books } = this.props; 
    console.log("Books from props:", books);
    this.setState({ selectedBooks: books });
  }

 
  searchBook = () => {
    const { books } = this.props;
    const { searchTerm } = this.state;

    
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

   
    this.setState({ selectedBooks: filteredBooks });
  };

 
  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { selectedBooks, searchTerm } = this.state; 

    return (
      <Container className="mt-4">
        
        <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" onClick={this.searchBook}>
            Search
          </Button>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={this.handleSearchChange} 
            placeholder="Search for a book"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
          
        </InputGroup>
        <Row>
          {selectedBooks.map((book) => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
