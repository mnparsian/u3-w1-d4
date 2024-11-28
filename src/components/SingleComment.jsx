import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class SingleComment extends Component {
  render() {
    const { comment } = this.props; // دریافت کامنت از props

    return (
      <div>
        <p><strong>{comment.author}</strong>: {comment.comment} <Badge>{comment.rate}⭐</Badge></p>
       
      </div>
    );
  }
}

export default SingleComment;
