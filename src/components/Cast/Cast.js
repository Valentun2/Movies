import { getInformation } from 'apiAuthorsRewies';
import Actor from 'components/Actor/Actor';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List } from './Cast.styled';
import { Container } from 'components/Container.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const param = useParams();

  useEffect(() => {
    getInformation(param.id, 'credits')
      .then(data => {
        setActors(data.cast);
      })
      .catch(err => {
        console.log(err);
      });
  }, [param.id]);

  return (
    <Container>
     
      <List>
        {actors.map(actor => {
          return (
            <Item key={actor.id}>
              <Actor data={actor} />
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default Cast;
