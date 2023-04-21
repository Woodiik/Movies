import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;
  margin-top: 60px;
  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  margin: 30px;
  text-align: center;
`;
export const Img = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  margin-bottom: 10px;
  box-shadow: 1px 3px 20px 6px rgba(0, 0, 0, 0.75);
`;

export const Name = styled.h4`
  margin: 0;
`;
