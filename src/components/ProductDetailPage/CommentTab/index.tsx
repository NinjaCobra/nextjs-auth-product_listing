import GeneralRating from "../GeneralRating";
import AddNewComment from "../AddNewComment";
import { Comment, Product } from "@/types";

interface Props {
  product: Product;
}

const CommentTab = (props: Props) => {
  const { product } = props;

  return (
    <div className="comments">
      <h2 className="header">
        Total Reviews ({product.totalNumberOfComments})
      </h2>

      <AddNewComment product={product} />

      <GeneralRating rating={product.rating} infoShown />

      <div className="list">
        {product.comments.map((comment: Comment) => (
          <div key={comment.id} className="comment">
            <GeneralRating rating={comment.rating} size="small" />
            <div className="comment-text">{comment.commentMessage}</div>
            <div className="user">{comment.username}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentTab;
