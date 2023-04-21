import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Description = styled.div`
  max-width: 800px;
  margin-left: 40px;
`;

export const Img = styled.img`
  display: block;
  width: 300px;
  height: 450px;
  margin-bottom: 10px;
  box-shadow: 1px 3px 20px 6px rgba(0, 0, 0, 0.75);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: #e3b520;
`;
export const BackLink = styled(NavLink)`
  position: absolute;
  top: 21px;
  left: 20px;
  text-decoration: none;
  color: purple;
`;
