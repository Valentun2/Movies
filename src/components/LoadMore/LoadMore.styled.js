import styled from 'styled-components';

export const BtnLoadMore = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 25px;
  padding: 6px 24px;
  cursor: pointer;
  color: white;
  background: blue;
  border-radius: 8px;
  border: 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #000080;
  }
`;
