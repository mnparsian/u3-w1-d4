import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false
  };

  toggleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    const cardStyle = selected ? { border: '2px solid red' } : {};

    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <p>Price: {book.price} €</p>
              <p>Category: {book.category}</p>
            </Card.Text>
            <Button onClick={this.toggleSelect}>
              {selected ? "Deselect" : "Select"}
            </Button>
          </Card.Body>
          {selected && <CommentArea asin={book.asin} />}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
