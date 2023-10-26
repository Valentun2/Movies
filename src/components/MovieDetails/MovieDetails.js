import { Link, Outlet, useParams } from 'react-router-dom';
import { searchMovieForId } from 'apiMovieId';
import { useEffect, useState } from 'react';
import { Container } from 'components/Container.styled';
import {
  Div,
  DivContainer,
  DivWrraper,
  Film,
  H3,
  StyleLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [genres, setGenres] = useState([]);
  const params = useParams();

  useEffect(() => {
    async function search() {
      try {
        const arr = await searchMovieForId(params.id);
        setMovieInfo(arr);
        setGenres(arr.genres);
      } catch (err) {
        console.log(err);
      }
    }
    search();
  }, []);

  return (
    <Container>
      <Div>
        <img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w400/${movieInfo.poster_path}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp9IN56pUVBHlFatrKgEmqdERoeNhH1QQn7W0_8oRboIG62du-jaOroFWjHt0UAz21SU&usqp=CAU'
          }
        />
        <div>
          <Film>{movieInfo.title}</Film>
          <p>User score:{movieInfo.vote_average}</p>
          <H3>Overview</H3>
          <p>{movieInfo.overview}</p>
          <H3>Genres</H3>
          <p>{genres.map(item => item.name).join(', ')}</p>
        </div>
      </Div>
      <DivContainer>
      
        <h3>Additional information:</h3>
        <DivWrraper>
          <StyleLink to={'cast'}>Actors</StyleLink>
          <StyleLink to={'reviews'}>Reviews</StyleLink>
        </DivWrraper>
      </DivContainer>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
