import React from 'react';
import './mobileSecond.css';
type componentProps = {
  children?: React.ReactNode;
};

const textBoxStyle: React.CSSProperties = {
  display: 'flex',
  marginBottom: '50px',
  flexDirection: 'column',
  alignItems: 'center',
};

const secondSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginTop: '100px',
  backgroundSize: 'cover',
  color: 'white',
};

const introduceBoxStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 20px',
  width: '100%',
  opacity: '1',
};

const indtroduceStyle: React.CSSProperties = {
  color: 'black',
  fontFamily: 'GangwonState',
  fontSize: '24px',
};

const MobileSecond = ({ children }: componentProps) => {
  return (
    <>
      <div style={secondSectionStyle}>
        <div style={textBoxStyle} className="heading">
          <span style={indtroduceStyle}>행사의 성공을 판촉물로 만들다</span>
          <span style={indtroduceStyle}>완벽한 광고대행 서비스</span>
        </div>

        <div style={introduceBoxStyle}>{children}</div>
      </div>
    </>
  );
};

export default MobileSecond;
