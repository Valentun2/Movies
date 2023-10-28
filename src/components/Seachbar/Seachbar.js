import { Button, Div, Form, Input, Svg } from './Seachbar.styled';

const Seachbar = ({ onSearch }) => {

  

const onSubmit = evt => {
  evt.preventDefault();
 onSearch(evt.target.search.value);
};

  return (
    <Form onSubmit={onSubmit}>
      <Div>
        <Input type="text" name="search" placeholder="Search" />
        <Button>
          <Svg />
        </Button>
      </Div>
    </Form>
  );
};

export default Seachbar;
