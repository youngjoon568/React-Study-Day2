import React from 'react';
import Header from './components/Header';
import styled, { createGlobalStyle } from "styled-components";
import Todo from './components/todo/Todo';


const GlobalStyle = createGlobalStyle`
*{box-sizing: border-box;border-radius: 0;}
html{font-size: 10px;}
body{width:100%;margin:0px;}
`;

const Wrapper = styled.div`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
  font-family: "Pretendard-Regular";
`;

export default function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Todo />
    </Wrapper>
  )
}