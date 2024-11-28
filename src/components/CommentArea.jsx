import AddComment from "./AddComment";
import CommentList from "./CommentList";


const CommentArea = (props) => (
  <div>
    <h5 className="px-2 py-2 border-bottom border-top">Reviews:</h5>
    <CommentList asin={props.asin} ></CommentList>
    <AddComment asin={props.asin} />
  </div>
);
export default CommentArea;



