import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const Svg = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  fill: gray;
  align-self: center;
`;

export const Form = styled.form`
  padding-top: 10px;
  padding-bottom: 10px;
  /* background: #000080; */
  display: flex;
  /* justify-content: center; */
`;

export const Input = styled.input`
  width: 100%;
  border-color: black;
`;
export const Button = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 4px;
  padding: 0px;
  top: 1px;
  :hover {
    :only-child {
      fill: #000080;
    }
  }
`;
export const Div = styled.div`
  position: relative;
  width: 200px;
  margin-left: 10px;
`;
