import { Author } from './Review.styled';

const Review = props => {
  return (
    <>
      <Author>{props.data.author}:</Author>
      <p>{props.data.content}</p>
    </>
  );
};

export default Review;
