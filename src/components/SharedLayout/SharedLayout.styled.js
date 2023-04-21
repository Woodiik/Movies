import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 80px 80px;
  margin: 0 auto;
`;
export const Header = styled.header`
  display: block;
  width: 100%;
  padding: 20px 0px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: lightgray;
`;
export const Nav = styled.nav`
  margin-left: 200px;
`;
export const Link = styled(NavLink)`
  padding: 20px;
  font-size: 20px;

  :not(:first-child) {
    margin-left: 60px;
  }

  color: purple;
  text-decoration: none;
`;
