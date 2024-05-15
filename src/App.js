import React, { lazy, Suspense, useState } from 'react';
import styled from 'styled-components';
import './App.css';

const AudioController = lazy(() => import('./CustomAudioPlayer.js'));

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

// Main
const Main = styled.main`
  display: flex;
  justify-content: space-between;
  flex: 1;
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

//Menu
const Menu = styled.div`
  width: 1000%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
  gap: 10px;
  overflow: hidden;
  text-align: center;
`;

//MenuContent
const MenuContent = styled.button`
  height: 100%;
  background-color: gray;
  border: gray;
  border-radius: 10px;
  transition: all 0.5s;
  text-align: center;
  overflow: hidden;
  &:hover {
    background-color: black;
    cursor: pointer;
    transition: all 0.5s;
  }
`;
//MenuContent2
const MenuContent2 = styled(MenuContent)`
  &:hover {
  }
`;
//MenuContent3
const MenuContent3 = styled(MenuContent)`
  &:hover {
  }
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
  font-size: 5px;
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
        <Menu>
        <Suspense>
          <Controller
            $showController={showController}
            onMouseEnter={() => setShowController(true)}
            onMouseLeave={() => setShowController(false)}
          >
          <AudioController src='./sfx/Eliza.mp3'/>
          </Controller>
        </Suspense>
          <MenuContent onClick={()=>{}}> 2000 </MenuContent>
          <MenuContent2> 2024 </MenuContent2>
          <MenuContent3> 1971 </MenuContent3>
        </Menu>
      </Main>
      <Footer>
        <h3>©2024 SilverisIron. All Rights Reserved.</h3>
        <a href='/'>Email</a>
      </Footer>
    </LayoutWrapper>
  );
}

export default App;
