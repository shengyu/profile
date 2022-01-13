import React from 'react';
import styled from 'styled-components';

export default function About() {
  return <HomeContainer>{createStars()}</HomeContainer>;
}

const HomeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #0b1a3a;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    box-shadow: 110px 110px 1px rgba(255, 255, 255, 0.8);
  }
`;

function createStars() {
  const stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3}px`,
          height: `${Math.random() * 3}px`,
          background: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`,
          transform: `rotate(${Math.random() * 360}deg)`,
          transformOrigin: `${Math.random() * 100}% ${Math.random() * 100}%`,
          animation: `${Math.random() * 2}s ${Math.random() * 2}s infinite`,
        }}
      />,
    );
  }
  return stars;
}
