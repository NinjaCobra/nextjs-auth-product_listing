import { Rating } from "@mui/material";
import React from "react";

interface Props {
  rating: number;
  totalNumberOfComments?: number;
  size?: "small" | "medium" | "large";
  infoShown?: boolean;
  isTotalCommentCountShown?: boolean;
}

const GeneralRating = (props: Props) => {
  return (
    <div className="general-rating">
      <Rating
        name="simple-controlled"
        value={props.rating}
        readOnly
        precision={0.5}
        size={props.size ?? "medium"}
      />
      <div className="count">{props.rating}</div>
      {props.isTotalCommentCountShown && (
        <div className="totalCommentCount">({props.totalNumberOfComments})</div>
      )}

      {props.infoShown && <p className="info-message">(Ortalama Puan)</p>}
    </div>
  );
};

export default GeneralRating;
