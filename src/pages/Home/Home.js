import Movie from 'components/Movie/Movie';
import { Item, List } from './Home.styled';
import { useEffect, useState } from 'react';
import { getMovies } from 'api';
import { Container } from 'components/Container.styled';
import { Watch } from 'react-loader-spinner';

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function dataFilms() {
      setLoading(true);
      try {
        const arrMovies = await getMovies();
        setMovies(arrMovies.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    dataFilms();
  }, []);

  return (
    <Container>
      <List>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <Movie arr={movie} pageHome={true} />
            </Item>
          );
        })}
      </List>
      <Watch visible={loading} />
    </Container>
  );
};

export default Home;
