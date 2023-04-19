import { useState, useEffect, useRef } from 'react';
import { NavLink, useParams, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Description = styled.div`
  max-width: 800px;
  margin-left: 40px;
`;

const Img = styled.img`
  display: block;
  width: 300px;
  height: 450px;
  margin-bottom: 10px;
  box-shadow: 1px 3px 20px 6px rgba(0, 0, 0, 0.75);
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #e3b520;
`;
const BackLink = styled(NavLink)`
  position: absolute;
  top: 21px;
  left: 20px;
  text-decoration: none;
  color: purple;
`;

const API_KEY = 'c2cddca1d76ae825076ff4418ab72190';
export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const savedLocation = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data);
      });
  }, [movieId]);
  return (
    <div>
      <BackLink to={savedLocation.current}>Back to movies</BackLink>
      {movie && (
        <Container>
          <div>
            <Img
              alt={`${movie?.title}`}
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`}
            />
          </div>
          <Description>
            <h2>{movie?.title}</h2>
            <div>
              <h3>Overview</h3>
              <p>{movie?.overview}</p>
            </div>
            <div>
              <h3>Genres</h3>
              {movie?.genres.map(({ name }, index) => (
                <span key={index}> | {name} |</span>
              ))}
            </div>
            <div>
              <h3>Rating</h3>
              <p>
                Rating: <span>{movie?.vote_average.toFixed(1)}</span> Votes:{' '}
                <span>{movie?.vote_count}</span>
              </p>
            </div>
            <Link to="cast">Cast |</Link>
            <Link to="reviews"> Reviews</Link>
          </Description>
        </Container>
      )}

      <Outlet />
    </div>
  );
};
