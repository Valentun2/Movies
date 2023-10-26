import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li`
  box-shadow: 1px 1px 0.5px 1px rgba(0, 0, 0, 0.3);
  width: 250px;
  border: 1px solid #e7e9fc;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.3);

    transform: scale(1.05);
  }
`;
