import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkStyle = styled(NavLink)`
  font-size: 16px;
  color: white;
  &.active {
    color: yellow;
  }
`;
export const HeaderStyle = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  background: #000080;
  display: flex;
  gap: 16px;
`;
