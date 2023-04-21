import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem, Img, Name } from './Cast.styled';
const API_KEY = 'c2cddca1d76ae825076ff4418ab72190';
const Cast = () => {
  const [data, setData] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(res => res.json())
      .then(({ cast }) => {
        setData(cast);
      });
  }, [movieId]);

  return (
    <div>
      <List>
        {data &&
          data.map(item => {
            return (
              <ListItem key={item.id}>
                <Img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item?.profile_path}`}
                  alt={item.name}
                />
                <Name>{item.name}</Name>
                <p>Character: {item.character}</p>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};
export default Cast;
