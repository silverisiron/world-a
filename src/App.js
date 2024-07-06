import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Controller, Footer, Header, LayoutWrapper, Main, Menu, MenuContent, MenuContent2, MenuContent3 } from './style/styledComponents.js';

const AudioController = lazy(() => import('./style/CustomAudioPlayer.js'));
// App
function App() {

  const navigate = useNavigate();
  const [showController, setShowController] = useState(false);

  return (
    <>
      {/* Head */}
      <LayoutWrapper>
        <Header onClick={() => navigate('/')}>
          <h1>안녕하세요</h1> 
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
                <Controller
                  $showController={showController}
                  onMouseEnter={() => setShowController(true)}
                  onMouseLeave={() => setShowController(false)}
                >
                <AudioController src='./sfx/Eliza.mp3'/>
                </Controller>
        </Suspense>

      {/* Routes */}
      <Routes>
        {/* Main Page */}
        <Route path="/" element={
          <>
            <Main>
              <Menu>
                <MenuContent onClick={() => navigate('/detail')}></MenuContent>
                <MenuContent2></MenuContent2>
                <MenuContent3></MenuContent3>
              </Menu>
            </Main>
          </>
        }/> 
        {/* Detail Page */}
        <Route path="/detail" element={ <div>상세페이지임</div> } />
      </Routes>

        {/* footer */}
        <Footer>
          <h3>©2024 SilverisIron. All Rights Reserved.</h3>
          <a href='mailto:silverisiron@gmail.com'>Email</a>
        </Footer>
      </LayoutWrapper>
    </>
  );
}

export default App;
