import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.length
      ? comments
        .map(comment => <CommentInfo comment={comment} key={comment.id} />)
      : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
  </div>
);