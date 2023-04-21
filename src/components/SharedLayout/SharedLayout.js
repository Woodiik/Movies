import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Nav, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
