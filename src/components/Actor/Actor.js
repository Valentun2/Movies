import { Name } from './Actor.styled';

const Actor = props => {
  return (
    <>
      <img
        width={200}
        height={300}
        src={
          props.data.profile_path
            ? `https://image.tmdb.org/t/p/original/${props.data.profile_path}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQp9IN56pUVBHlFatrKgEmqdERoeNhH1QQn7W0_8oRboIG62du-jaOroFWjHt0UAz21SU&usqp=CAU'
        }
      />
      <Name>{props.data.name}</Name>
    </>
  );
};

export default Actor;
