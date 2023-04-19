import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
const API_KEY = 'c2cddca1d76ae825076ff4418ab72190';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 30px;
`;
const Link = styled(NavLink)`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #fff;
`;
const Img = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  margin-bottom: 10px;
  box-shadow: 1px 3px 20px 6px rgba(0, 0, 0, 0.75);
`;

export const Home = () => {
  const [films, setFilms] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchFilms().then(({ results }) => {
      setFilms(results);
    });
  }, []);
  return (
    <div>
      <List>
        {films &&
          films.map((film, index) => {
            return (
              <ListItem key={index}>
                <Link to={`/movies/${film.id}`} state={{ from: location }}>
                  <Img
                    alt={`${film?.title}`}
                    src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${film?.poster_path}`}
                  />
                  {film?.title || film?.original_name}
                </Link>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

function fetchFilms() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  ).then(res => res.json());
}
