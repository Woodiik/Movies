import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;
  margin-top: 60px;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 30px;
`;
const Img = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  margin-bottom: 10px;
  box-shadow: 1px 3px 20px 6px rgba(0, 0, 0, 0.75);
`;

const Name = styled.h4`
  margin: 0;
`;
const API_KEY = 'c2cddca1d76ae825076ff4418ab72190';
export const Cast = () => {
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
