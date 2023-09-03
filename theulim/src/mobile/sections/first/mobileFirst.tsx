import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './mobileFirst.css';
import DownloadButton from '../../../components/buttons/downloadButtons/downloadButton';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { url } from 'inspector';
import MobileSecond from '../second/mobileSecond';
import SummaryCard from '../../../components/Summary/SummaryCard';

// const slideDown = keyframes`
//   from {
//     transform: translateY(-100%);
//   }

//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// `;

// const AnimatedDiv = styled.div`
//   animation: ${slideDown} 1s forwards;
// `;
type ButtontProps = {
  children?: React.ReactNode;
};

const firstSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
  backgroundImage: `url("img3.jpg")`,
  backgroundSize: 'cover',
  color: 'white',
};

const headerStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  padding: '25px',
};

const logoStyle: React.CSSProperties = {
  fontFamily: 'NanumBarunpen',
  fontSize: '23px',
};

const introduceBoxStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0px 25px',
  marginTop: '35px',

  opacity: '1',
};

const indtroduceStyle: React.CSSProperties = {
  fontFamily: 'NotoSerifKR',
  fontSize: '3vh',
};

const MobileFirst = ({ children }: ButtontProps) => {
  if (window.scrollY) {
    console.log('aa');
  }
  return (
    <>
      <div style={firstSectionStyle}>
        <div style={headerStyle}>
          <div style={logoStyle}>더울림</div>
        </div>
        <div style={introduceBoxStyle}>
          <span style={indtroduceStyle}>더울림으로 모든 순간을</span>
          <span style={indtroduceStyle}>브랜드 스토리로 전환하세요</span>
        </div>
        {children}
      </div>
    </>
  );
};

export default MobileFirst;
