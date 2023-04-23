import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  position: absolute;
  top: -40px;
  left: 55%;
  margin-top: 58px;
`;
export const Input = styled.input`
  font-size: 20px;
  outline: none;
  border: 2px solid #5a5a5a;
  border-radius: 5px;
  :focus {
    border-color: purple;
  }
`;
export const Button = styled.button`
  font-size: 20px;
  color: purple;
  cursor: pointer;
  outline: none;
  border: 2px solid #5a5a5a;
  border-radius: 5px;
  :hover {
    border-color: purple;
    background-color: gainsboro;
  }
  :active {
    transform: scale(0.9);
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;
  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  margin: 30px;
`;
export const Link = styled(NavLink)`
  display: block;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: inherit;
`;
export const Thumb = styled.div`
  max-width: 200px;
`;
export const Img = styled.img`
  display: block;
  margin-bottom: 10px;
  box-shadow: 1px 3px 20px 6px rgba(0, 0, 0, 0.75);
`;
