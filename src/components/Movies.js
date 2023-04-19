import { useState, useEffect } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  position: absolute;
  top: -40px;
  left: 55%;
  margin-top: 58px;
`;
const Input = styled.input`
  font-size: 20px;
  outline: none;
  border: 2px solid #5a5a5a;
  border-radius: 5px;
  :focus {
    border: 2px solid gray;
  }
`;
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
const API_KEY = 'c2cddca1d76ae825076ff4418ab72190';
export const Movies = () => {
  //const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const valueParams = searchParams.get('name') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (valueParams !== '') {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${valueParams}&include_adult=false`
      )
        .then(res => res.json())
        .then(({ results }) => {
          setMovies(results);
        });
    }
  }, [valueParams]);
  function updateQueryString(name) {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  }
  function handleSubmit(e) {
    e.preventDefault();
    //setValue(e.target.elements.input.value.trim());
  }
  return (
    <div>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          value={valueParams}
          placeholder="Search movie"
          type="text"
          name="input"
          onChange={e => updateQueryString(e.target.value)}
        />
        {/*<button type="submit">Search</button>*/}
      </Form>
      {movies && (
        <div>
          <List>
            {movies.map(movie => {
              return (
                <ListItem key={movie.id}>
                  <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    <Img
                      alt={`${movie?.title}`}
                      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`}
                    />
                    {movie.title}
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
