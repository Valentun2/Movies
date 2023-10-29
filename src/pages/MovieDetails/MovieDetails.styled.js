import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 16px;
`;
export const DivWrraper = styled.div`
  margin-top: 16px;
  :first-child {
    margin-right: 16px;
  }
`;

export const DivContainer = styled.div`
  padding-top: 16px;
`;

export const StyleLink = styled(Link)`
  color: blue;
`;

export const Film = styled.h1`
  margin-bottom: 16px;
`;
export const H3 = styled.h3`
  margin: 12px 0;
`;

export const BtnBack = styled(Link)`
display:inline-block;
height: 30px;
width: 45px;
padding: 5px;
margin-bottom:10px;
background:blue;
color:white
`