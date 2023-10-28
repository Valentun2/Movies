import { getInformation } from 'apiAuthorsRewies';
import { Container } from 'components/Container.styled';
import Review from 'components/Review/Review';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import { Li } from './Reviews.styled';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const param = useParams();



  useEffect(() => {
    async function getReviews() {
      setReviews([]);
      try {
        const arrReviews = await getInformation(param.id, 'reviews');
        setReviews(arrReviews.results);
      } catch (err) {
        console.log(err);
      }
    }
    getReviews();
  }, [param.id]);
  return (
    <Container>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(review => {
            return (
              <li key={review.id}>
                <Review data={review} />
              </li>
            );
          })
        ) : (
          <Li>No one has left a comment.</Li>
        )}
      </ul>
    </Container>
  );
};

export default Reviews;
