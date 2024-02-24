import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import AudioController from './CustomAudioPlayer.js';

// Layout
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// header
const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1px;
  text-align: center;
  font-size: 9px;
  font-family: 'establishRetrosans'
`;

//aaaa

// Main
const Main = styled.main`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

// Controller
const Controller = styled.div`
  position: fixed;
  right: ${({ $showController }) => $showController ? "0" : "-100px"};
  overflow: hidden;
  transition: all 0.2s;
`;

// footer
const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

// App
function App() {
  const [showController, setShowController] = useState(false);

  return (
    <LayoutWrapper>
      <Header>
        <h1>안녕하세요</h1>
      </Header>
      <Main>
        <Controller
          $showController={showController}
          onMouseEnter={() => setShowController(true)}
          onMouseLeave={() => setShowController(false)}>
          <AudioController src='./sfx/Eliza.mp3'/>
        </Controller>
      </Main>
      <Footer>
        <h3>footer</h3>
      </Footer>
    </LayoutWrapper>
  );
}

export default App;
