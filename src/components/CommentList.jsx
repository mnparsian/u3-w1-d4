import React, { Component } from "react";
import SingleComment from "./SingleComment"; // وارد کردن کامپوننت SingleComment

class CommentList extends Component {
  state = {
    comments: [], // تعریف state برای ذخیره کامنت‌ها
  };

  componentDidMount() {
    const { asin } = this.props;

    // درخواست به API برای دریافت کامنت‌ها
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTBhMjhhZDEyOTAwMTU4NzZiZDIiLCJpYXQiOjE3MzI3OTY5NDIsImV4cCI6MTczNDAwNjU0Mn0.NNHDzscXV2OaYuMmfZisR3Lba_20LLdqsIoxf_zsGm8"
            }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch data");
        }
      })
      .then((data) => {
        this.setState({ comments: data }); // ذخیره داده‌ها در state
      })
      .catch((error) => console.error("Error:", error));
  }

  render() {
    const { comments } = this.state;

    return (
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <SingleComment comment={comment} /> {/* استفاده از SingleComment برای نمایش هر کامنت */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;