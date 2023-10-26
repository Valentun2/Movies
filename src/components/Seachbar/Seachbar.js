import { Button, Div, Form, Input, Svg } from './Seachbar.styled';

const Seachbar = ({ onSubmit }) => {
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
