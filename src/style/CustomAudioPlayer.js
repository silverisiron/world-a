import React, { useRef, useState } from 'react';

const AudioController = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 재생/일시정지 토글 함수
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 볼륨 변경 함수
  const changeVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;
  };

  return (
    <div className="flex flex-row bg-gradient-to-r from-purple-700 via-yellow-300 to-green-400 p-9 h-10 rounded-full border-2 border-gray-400">
      <audio ref={audioRef} src={src} loop /> {/* loop 속성 추가 */}
      <button
        className="flex items-center bg-transparent border-none mr-1.5 focus:outline-none"
        onClick={togglePlay}
      >
        <img
          src={isPlaying ? "./images/stop.png" : "./images/play.png"}
          alt={isPlaying ? 'stop' : 'play'}
          className="w-9 h-9 filter invert cursor-pointer"
        />
      </button>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        className="flex items-center w-24 cursor-pointer appearance-none focus:outline-none"
        onChange={changeVolume}
      />
    </div>
  );
};

export default AudioController;
