import { searchMovies } from 'apiSearchMovies';
import { useState } from 'react';
import Movie from 'components/Movie/Movie';
import { Item, List } from 'components/Home/Home.styled';
import Seachbar from 'components/Seachbar/Seachbar';
import { useEffect } from 'react';
import LoadMore from 'components/LoadMore/LoadMore';
import { Watch } from 'react-loader-spinner';
import { Container } from 'components/Container.styled';
import {  useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [arrayMovies, setArrayMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [visibleButton, setVisibleButton] = useState(false);
  const [loading, setLoading] = useState(false);
const [params,setParams]= useSearchParams()

  const onSubmit = e => {
    e.preventDefault();
    if (e.target.search.value === query) {
      return;
    }
    setQuery(e.target.search.value);
    setPage(1);
    setArrayMovies([]);
    setVisibleButton(false);
    setParams({'query':e.target.search.value})
  };

  useEffect(() => {
    if (query === '') {
      setQuery(params.get('query') ?? '')
      }
   
    async function arrMovies() {
        setLoading(true);
        try {
          const movies = await searchMovies(query, page);
          setArrayMovies(prev => [...prev, ...movies.results]);
        if (movies.total_pages > page) {
          setVisibleButton(true);
        } else {
          setVisibleButton(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    arrMovies();
  }, [page, query,params]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };
  console.log(arrayMovies);

  return (
    <>
      <Seachbar onSubmit={onSubmit} />
      <Container>
        <List>
          {arrayMovies.map(movie => {
            return (
              <Item key={movie.id} id={movie.id}>
                <Movie arr={movie} />{' '}
              </Item>
            );
          })}
        </List>
        <Watch visible={loading} />
        {visibleButton && <LoadMore onloadMore={loadMore} />}
      </Container>
    </>
  );
};

export default Movies;