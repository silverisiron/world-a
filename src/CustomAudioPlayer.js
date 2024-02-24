import React, { useRef, useState } from 'react';
import styled from 'styled-components';


// 오디오 컨트롤러 스타일
const CustomAudioPlayer = styled.div`
  display: flex;
  flex-direction: row;
  background: rgb(111,25,208);
  background: linear-gradient(45deg, rgba(111,25,208,1) 0%, rgba(213,253,45,1) 100%);
  padding: 35px;
  height: 10px;
  border-radius: 50px;
  border: 2px solid;
  border-color: greenyellow;
`;

// 오디오 컨트롤 버튼 스타일
const ControlButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  margin-right: 5px;

  &:focus {
    outline: none;
  }
`;

// 오디오 컨트롤 버튼 이미지 스타일
const IconImage = styled.img`
  width: 35px;
  height: 35px;
  filter: invert(1);
  cursor: pointer;
`

// 볼륨 컨트롤러 스타일
const VolumeControl = styled.input.attrs({
  type: 'range',
  min: 0,
  max: 100,
  step: 1
})`
  display: flex;
  align-items: center;
  width: 100px;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background-color: #ccc;
    height: 15px;
    border-radius: 5px;
  }
`;

// 오디오 컨트롤러 컴포넌트
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
    <CustomAudioPlayer>
      <audio ref={audioRef} src={src} loop /> {/* loop 속성 추가 */}
      <ControlButton onClick={togglePlay}>{isPlaying ? <IconImage src="./images/stop.png" alt='stop' /> : <IconImage src="./images/play.png" alt='play' />}</ControlButton>
      <VolumeControl onChange={changeVolume} />
    </CustomAudioPlayer>
  );
};

export default AudioController;
