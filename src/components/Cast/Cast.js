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
                <div>
                  {item.profile_path && (
                    <Img
                      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.profile_path}`}
                      alt={item.name}
                    />
                  )}
                  {!item.profile_path && (
                    <Img
                      src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QDw4PDQ4PDQ8QDRAODg8QDRANDg0NFREWFhURFRUYHCggGBolGxUTITEhJSkrLi4uFx8zODMtNygzLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGBAECB//EADQQAQACAQEGAgcGBwAAAAAAAAABAgMRBAUSITFRQXETMmGBkbHBIlJikqHhM0JTcoLR8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5IPXiPNnpSNb2ivmq9s3z4Yo1/FP0gFyMtfbs09clvdyRztOX+pf88g1mpMsl6a/37/mkpmvE6xe0f5SDWvVLsW+PDN+aI+cLXDtFL+paJ8p5glAAAAAAAAAAAAAB5Lm2vbaY4+1PPwr4ynzW0raZnTSJ59mRm0zOszMz4zPOQSbTtFslptafKO0dkQAAAAAPqlpiYmszEx4w+QGh3bvD0kcNuV4j3WjvCxY6tpidYmYmPGOsNJuraZyY4mZ1tHK3tnuDtAAAAAAAAAAB8ZraVtPaJkFJvrbNZ9HWeUet7Z7KsmdZmZ6zzkAAAAAAAAAdW7tqnHePuzytHscoDYw9c27snFipPWeHSfOHSAAAAAAAAAh2v8Ah3/sn5Jke0RrS8fhn5AyIAAAAAAAAABIAvtwX1x2jtedPgtFfuTFw4on70zb3LAAAAAAAAAB5Ma8nry06RqDI5qcNrR2mY/V8JtryRbJe0dJtKEAAAAAAAAACOsA0+6p1w08vq60Wy8PBXg5105aJQAAAAAAAAEG3RPosmnXgnT4J3lo1jTvyBjhJtGPhvava0/BGAAAAAAAAAADSbmrphr7ZmfjLuRbNThpSvasR+iUAAAAAAAAB5L0Bnt+Y9MsT96sT9Fc0+8NijLXTXhtHOJ+jO7TgtjtNbdY/WO4IgAAAAAAAE2x4+LJSve0a+UI6VmZiI6zOkea/wB2bu9H9q863mNOXSsAsYCAAAAAAAAAAAHkqHf1JjJWfCa8vcv1dvvDxY+KOtJ193iDPAAAAAAAA7d0YeLLXtX7UtJCr3Dh0pa8/wA06R5R+61AAAAAAAAAAAA1AQ7XXXHePwW+T4z7bip61417RzlW7ZvjWJrjr1jTin6AqAAAAAADUAand1YjDiiP6dZ+Ma/V0s5se9MlIitoi9Y5dpiFvsu8cV+k8M9rcp/cHYPIegAAAAGrm2nb8WPla3PtHOXDl31X+Skz58gW+qDPtmKnr3iPZ1n4Qz+0bxzX624Y7V5OT/vaC5z778Mdffb/AFCuz7blv61507RyhzgAAAAAAAAAABIA6dn2/LT1bax2nnC0wb5pP8SJpPePtQogGuxZqWjWtot5Sk1Y6tpjnEzE94nR24N6Zq9Z447Wj6g0gqce+qT69Zjy5wApJnx79fa8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=`}
                      alt={item.name}
                    />
                  )}
                  <Name>{item.name}</Name>
                  <p>Character: {item.character}</p>
                </div>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};
export default Cast;
