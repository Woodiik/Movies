import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
  padding: 80px 80px;
  margin: 0 auto;
`;
const Header = styled.header`
  display: block;
  width: 100%;
  padding: 20px 0px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: lightgray;
`;
const Nav = styled.nav`
  margin-left: 200px;
`;
const Link = styled(NavLink)`
  padding: 20px;
  font-size: 20px;
  :not(:first-child) {
    margin-left: 60px;
  }
  color: purple;
  text-decoration: none;
`;
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};
