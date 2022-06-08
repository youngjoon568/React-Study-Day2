import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
background-color: #282c34;
height: 7rem;
color: #f1f1f1;
font-size: 2rem;
line-height: 7rem;
padding-left: 30px;
`;

export default function Header() {
  return (
    <StyledHeader>
      Todo List
    </StyledHeader>
  )
}
