import styled from 'styled-components';

// Layout
export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// header
export const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1px;
  text-align: center;
  font-size: 9px;
  font-family: 'establishRetrosans';
`;

// Main
export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  flex: 1;
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

// Menu
export const Menu = styled.div`
  width: 1000%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
  gap: 10px;
  overflow: hidden;
  text-align: center;
`;

// MenuContent
export const MenuContent = styled.div`
  height: 100%;
  border: gray;
  border-radius: 10px;
  transition: all 0.2s;
  text-align: center;
  overflow: hidden;
  background-image: url('/images/world-left.png');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  filter: blur(0px);
  &:hover {
    background-image: url('/images/world-left-night.png');
    cursor: pointer;
    transition: all 0.5s linear;
    transition-delay: 0.1s;
  }
`;

// MenuContent2
export const MenuContent2 = styled(MenuContent)`
  background-image: url('/images/world-middle.png');
  &:hover {
    background-image: url('/images/world-middle-night.png');
  }
`;

// MenuContent3
export const MenuContent3 = styled(MenuContent)`
  background-image: url('/images/world-right.png');
  &:hover {
    background-image: url('/images/world-right-night.png');
  }
`;

// Controller
export const Controller = styled.div`
  position: fixed;
  right: ${({ $showController }) => $showController ? "0" : "-100px"};
  overflow: hidden;
  transition: all 0.2s;
  z-index: 10;
`;

// Footer
export const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  font-size: 5px;
  padding: 10px;
  text-align: center;
`;