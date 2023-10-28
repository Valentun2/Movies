import { useSearchParams } from 'react-router-dom';
import { Button, Div, Form, Input, Svg } from './Seachbar.styled';

const Seachbar = ({ onSubmit }) => {
  const [searchParams,setSearchParams]=useSearchParams()
const onChange = e =>{
  setSearchParams({'query':e.target.value})
}

  return (
    <Form onSubmit={onSubmit}>
      <Div>
        <Input type="text" name="search" placeholder="Search" value={searchParams.get('query') ?? ""} onChange={onChange}/>
        <Button>
          <Svg />
        </Button>
      </Div>
    </Form>
  );
};

export default Seachbar;
