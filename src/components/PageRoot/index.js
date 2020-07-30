import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-right: 5%;
  padding-left: 5%;
`;

export default function PageRoot(props){
  return(
    <>
      <Menu />
        <Main>
          {props.children}
        </Main>
      <Footer />
    </>
  );
}