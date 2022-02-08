import React from "react";
import { connect } from "react-redux";

const CommentList = ({ comments }) => {
  const renderComments = () => {
    return comments.map((comment, i) => (
      <li key={`${comment}${i}`}>{comment}</li>
    ));
  };

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
