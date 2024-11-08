import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { flagImg } from './data';

const AudioController = lazy(() => import('./style/CustomAudioPlayer.js'));

// MenuContent definition
const menuItems = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  path: `/detail${i + 1}`,
  backgroundImage: `url('./images/world-${i + 1}.png')`,
  hoverImage: `url('./images/world-${i + 1}-night.png')`,
}));

// App
function App() {
  const navigate = useNavigate();
  const [showController, setShowController] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState('');
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const getFilteredFlags = (itemId) => {
    switch (itemId) {
      case 1:
        return flagImg.filter(flag => (flag.group === 'america') && flag.type === 'show');
      case 2:
        return flagImg.filter(flag => (flag.group === 'europe' || flag.group === 'africa') && flag.type === 'show');
      case 3:
        return flagImg.filter(flag => (flag.group === 'asia' || flag.group === 'pacific') && flag.type === 'show');
      default:
        return [];
    }
  };

  return (
    <>
      {/* Head */}
      <div className="flex flex-col min-h-screen">
        <header
          className="bg-gray-800 text-white p-1 text-center text-lg font-establishRetrosans cursor-pointer"
          onClick={() => navigate('/')}
        >
          <h1>세 제국</h1>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <div
            className={`fixed overflow-hidden transition-all duration-200 z-10 ${
              showController ? 'right-0' : '-right-24'
            }`}
            onMouseEnter={() => setShowController(true)}
            onMouseLeave={() => setShowController(false)}
          >
            <AudioController src='./sfx/SoFarFromGod.mp3' />
          </div>
        </Suspense>

        {/* Routes */}
        <Routes>
          {/* Main Page */}
          <Route path="/" element={
            <main className="flex justify-between flex-1 bg-gray-200 p-5 text-center">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2.5">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative h-full border-gray-300 rounded-xl transition-all duration-200 bg-cover bg-center bg-no-repeat hover:shadow-custom-blue"
                    style={{ backgroundImage: item.backgroundImage }}
                    onClick={() => navigate(item.path)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundImage = item.hoverImage;
                      e.currentTarget.classList.add('shadow-custom-blue');
                      setHoveredItemId(item.id);
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundImage = item.backgroundImage;
                      e.currentTarget.classList.remove('shadow-custom-blue');
                      setHoveredItemId(null);
                    }}
                  >
                    {hoveredItemId === item.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl">
                        {item.id === 1 ? 'AMER' : item.id === 2 ? 'EMEA' : item.id === 3 ? 'APAC' : ''}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </main>
          }/>

          {/* Detail Page */}
          {menuItems.map((item) => (
            <Route key={item.id} path={item.path} element={
              <>
                <div className="flex mx-auto p-5">
                  <div>
                    Asia-Pacific
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mx-auto w-full h-full bg-white">
                <div className="flex items-center justify-center space-x-4 w-[80%] h-[80%] mx-auto">
                  <div className="flex flex-col items-center mr-12">
                    <p>{selectedFlag.name || "국가를 선택해주세요."}</p>
                    <img src={selectedFlag.src} alt={selectedFlag.name || `none`} className="w-48 h-32 mt-2 border-2 border-gray-200 rounded"/>
                    <img src={selectedFlag.portrait} alt={`Selected portrait`} className="w-48 h-72 mt-2"/>
                  </div>
                  <div className="flex flex-col items-center w-[50%] border border-gray-300 rounded-md p-3 overflow-y-auto" style={{ whiteSpace: 'pre-wrap' }}>
                    <p>{selectedFlag.script || '설명란'}</p>
                  </div>
                </div>
                </div>
                <div className="grid grid-cols-8 gap-10 p-5 bg-gray-500">
                  {getFilteredFlags(item.id).map((flag, index) => (
                    <img key={index} src={flag.src} alt={`flag-${index}`} 
                    className="w-full h-full transition-all duration-200 hover:shadow-custom-black border-4 border-gray-100 rounded"
                    onClick={() => setSelectedFlag(flag)}/>
                  ))}
                </div>
              </>
            } />
          ))}
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-xs p-2.5 text-center">
          <address>
            <h3>©2024 SilverisIron. All Rights Reserved.</h3>
            <a href='mailto:silverisiron@gmail.com'>Email</a>
          </address>
        </footer>
      </div>
    </>
  );
}

export default App;
