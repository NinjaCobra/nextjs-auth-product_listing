import { useProductList } from "@/context/useProductList";
import { Comment, Product } from "@/types";
import { Rating } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

interface Props {
  product: Product;
}

const AddNewComment = (props: Props) => {
  const { data: session } = useSession();

  const [rating, setRating] = React.useState<number | null>(null);
  const [comment, setComment] = React.useState("");
  const { productList, handleChangeProductList } = useProductList();

  const { product } = props;

  const handleCommentToProduct = () => {
    // more validation can be added
    if (
      !rating ||
      !comment ||
      !session ||
      !session.user ||
      !session.user.name
    ) {
      return;
    }

    const newComment: Comment = {
      commentMessage: comment,
      rating: rating ?? 0,
      id: Math.random().toString(),
      username: session.user.name, // change username
    };

    const totalProductRating = product.comments.reduce((acc, comment) => {
      return acc + comment.rating;
    }, 0);

    const updatedRating = totalProductRating + rating;

    const newAvgRating = Number(
      updatedRating / (product.comments.length + 1)
    ).toFixed(1);

    // normally we get these updated data from the server
    const newUpdatedProductList = productList.map((p) => {
      // update the product
      if (p.id === product.id) {
        return {
          ...p,
          comments: [...p.comments, newComment],
          rating: parseFloat(newAvgRating),
          totalNumberOfComments: p.totalNumberOfComments + 1,
        };
      }

      return p;
    });

    // update the product list
    handleChangeProductList(newUpdatedProductList);

    setComment("");
    setRating(null);
  };

  return (
    <div className="add-new-comment">
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(_, newValue) => {
          setRating(newValue);
        }}
        size="medium"
      />

      <FloatingLabel
        controlId="floatingTextarea"
        label="Your Comment"
        className="mb-3"
      >
        <Form.Control
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
          as="textarea"
          placeholder="Leave a comment here"
        />
      </FloatingLabel>

      <Button type="submit" variant="primary" onClick={handleCommentToProduct}>
        Yorum Yap
      </Button>
    </div>
  );
};

export default AddNewComment;
