import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  Form,
  Input,
  Link,
  Img,
  Thumb,
  Button,
} from './Movies.styled';
const API_KEY = 'c2cddca1d76ae825076ff4418ab72190';
const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const valueParams = searchParams.get('name') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (valueParams === '') return;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${valueParams}&include_adult=false`
    )
      .then(res => res.json())
      .then(({ results }) => {
        setMovies(results);
      });
  }, [value, valueParams]);
  function updateQueryString(name) {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  }
  function handleSubmit(e) {
    const { value } = e.target.elements.input;
    e.preventDefault();
    setValue(value.trim());
    updateQueryString(value.trim());
  }
  return (
    <div>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          defaultValue={valueParams}
          placeholder="Search movie"
          type="text"
          name="input"
        />
        <Button type="submit">Search</Button>
      </Form>
      {movies && (
        <div>
          <List>
            {movies.map(movie => {
              return (
                <ListItem key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    <Thumb>
                      {movie.poster_path && (
                        <Img
                          width="200"
                          height="300"
                          alt={`${movie?.title}`}
                          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                        />
                      )}
                      {!movie.poster_path && (
                        <Img
                          width="200"
                          height="300"
                          alt={`${movie?.title}`}
                          src={
                            'https://www.publicdomainpictures.net/pictures/260000/nahled/play-button-15282372642Gh.jpg'
                          }
                        />
                      )}
                      <p>{movie?.title || movie?.original_name}</p>
                    </Thumb>
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </div>
      )}
      {movies?.length === 0 && (
        <h3>No results founded by search request "{valueParams}"</h3>
      )}
    </div>
  );
};
export default Movies;
