import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import './mobileFirst.css';
import MobileFirstButtons from '../firstPageButtons/firstPageButtons';

const MobileFirst = () => {
  return (
    <>
      <div className="firstSection">
        <div className="header">
          <div className="logo">더울림</div>
        </div>
        <div className="introduceBox">
          <span className="introduce">더울림으로 모든 순간을 브랜드</span>
          <span className="introduce">스토리로 전환하세요</span>
        </div>
        <MobileFirstButtons></MobileFirstButtons>
      </div>
    </>
  );
};

export default MobileFirst;
