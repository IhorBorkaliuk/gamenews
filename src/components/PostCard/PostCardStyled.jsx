import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #0e0f0f; 

  &:hover {
    text-decoration: underline; 
  }
`;