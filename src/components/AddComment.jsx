// AddComment.jsx
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: "",
      elementId: this.props.asin, 
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      comment: {
        ...prevState.comment,
        [name]: value
      }
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { elementId } = this.props;

    if (!elementId) {
      alert("Error: elementId is missing.");
      return;
    }

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${elementId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer YOUR_API_TOKEN"
      },
      body: JSON.stringify(this.state.comment)
    })
    .then(response => {
      if (response.ok) {
        alert('Comment added successfully!');
        this.setState({
          comment: {
            comment: "",
            rate: "",
            elementId: this.props.asin
          }
        });
      } else {
        throw new Error('Failed to add comment');
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert('There was an error adding the comment');
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            name="comment"
            placeholder="Write your comment"
            value={this.state.comment.comment}
            onChange={this.handleChange}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="number"
            name="rate"
            placeholder="Rate from 1 to 5"
            min="1"
            max="5"
            value={this.state.comment.rate}
            onChange={this.handleChange}
            required
          />
        </InputGroup>
        <Button type="submit" variant="primary">Add Comment</Button>
      </Form>
    );
  }
}

export default AddComment;
