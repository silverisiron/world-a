import React, { lazy, Suspense, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { flagImg } from './data';

const AudioController = lazy(() => import('./style/CustomAudioPlayer.js'));

// MenuContent definition
const menuItems = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  path: `/detail${i + 1}`,
  backgroundImage: `url('/images/world-${i + 1}.png')`,
  hoverImage: `url('/images/world-${i + 1}-night.png')`,
}));

// App
function App() {
  const navigate = useNavigate();
  const [showController, setShowController] = useState(false);

  return (
    <>
      {/* Head */}
      <div className="flex flex-col min-h-screen">
        <header
          className="bg-gray-800 text-white p-1 text-center text-lg font-establishRetrosans cursor-pointer"
          onClick={() => navigate('/')}
        >
          <h1>안녕하세요</h1>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <div
            className={`fixed overflow-hidden transition-all duration-200 z-10 ${
              showController ? 'right-0' : '-right-24'
            }`}
            onMouseEnter={() => setShowController(true)}
            onMouseLeave={() => setShowController(false)}
          >
            <AudioController src='./sfx/Eliza.mp3' />
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
                    className="h-full border-gray-300 rounded-xl transition-all duration-200 bg-cover bg-center bg-no-repeat hover:shadow-custom-blue"
                    style={{ backgroundImage: item.backgroundImage }}
                    onClick={() => navigate(item.path)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundImage = item.hoverImage;
                      e.currentTarget.classList.add('shadow-custom-blue');
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundImage = item.backgroundImage;
                      e.currentTarget.classList.remove('shadow-custom-blue');
                    }}
                  />
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
                <div className="flex mx-auto w-full h-96 bg-black">

                </div>
                <div className="grid grid-cols-9 gap-5 p-2">
                  {flagImg.map((src, index) => (
                    <img key={index} src={src} alt={`flag-${index}`} className="w-full h-full transition-all duration-200 hover:shadow-custom-black" />
                  ))}
                </div>
              </>
            } />
          ))}
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-xs p-2.5 text-center">
          <h3>©2024 SilverisIron. All Rights Reserved.</h3>
          <a href='mailto:silverisiron@gmail.com'>Email</a>
        </footer>
      </div>
    </>
  );
}

export default App;
