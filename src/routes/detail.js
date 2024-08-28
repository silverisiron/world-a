// import React, { lazy, Suspense, useState } from 'react';
// import { LayoutWrapper,Header,Main,Menu,MenuContent,MenuContent2,MenuContent3,Controller,Footer} 
// from './style/styledComponents.js';
// import {Outlet, Route, Routes, useNavigate} from 'react-router-dom';
// import './App.css';

// const AudioController = lazy(() => import('./style/CustomAudioPlayer.js'));
// // App
// function App() {

//   const navigate = useNavigate();
//   const [showController, setShowController] = useState(false);

//   return (
//     <LayoutWrapper>
//       <Header>
//         <h1>안녕하세요</h1> 
//       </Header>
//       <Main>
//         <Menu>
//         <Suspense>
//           <Controller
//             $showController={showController}
//             onMouseEnter={() => setShowController(true)}
//             onMouseLeave={() => setShowController(false)}
//           >
//           <AudioController src='./sfx/SoFarFromGod.mp3'/>
//           </Controller>
//         </Suspense>
//           <MenuContent onClick={() => navigate('/detail')}></MenuContent>
//           <MenuContent2></MenuContent2>
//           <MenuContent3></MenuContent3>
//         </Menu>
//       </Main>
//       <Footer>
//         <h3>©2024 SilverisIron. All Rights Reserved.</h3>
//         <a href='mailto:silverisiron@gmail.com'>Email</a>
//       </Footer>
//     </LayoutWrapper>
//   );
// }

// export default App;
