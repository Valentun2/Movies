import { Link } from 'react-router-dom';
import { P } from './Movie.styled';

const Movie = props => {
  return (
    <Link to={props.pageHome ? `movies/${props.arr.id}` : `${props.arr.id}`}>
      <img
        width={250}
        height={350}
        src={
          props.arr.poster_path
            ? `https://image.tmdb.org/t/p/original/${props.arr.poster_path}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp9IN56pUVBHlFatrKgEmqdERoeNhH1QQn7W0_8oRboIG62du-jaOroFWjHt0UAz21SU&usqp=CAU'
        }
      />
      <P>{props.arr.title}</P>
    </Link>
  );
};

export default Movie;
