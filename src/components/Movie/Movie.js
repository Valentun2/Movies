import { Link, useLocation } from 'react-router-dom';
import { P } from './Movie.styled';

const Movie = (props)=> {

  const location = useLocation()
console.log(location);

  return (
    <Link to={props.pageHome ? `movies/${props.arr.id}` : `${props.arr.id}`} state={location}>
      <img
        width={250}
        height={350}
        alt='poster'
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
