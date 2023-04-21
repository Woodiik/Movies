import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { List, ListItem, Link, Img, Thumb } from './Home.styled';
const API_KEY = 'c2cddca1d76ae825076ff4418ab72190';

const Home = () => {
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
                  <Thumb>
                    <Img
                      width="200"
                      heigth="300"
                      alt={`${film?.title}`}
                      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${film?.poster_path}`}
                    />
                    <p>{film?.title || film?.original_name}</p>
                  </Thumb>
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

export default Home;
