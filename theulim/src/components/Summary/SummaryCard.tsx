import React, { useState } from 'react';

import './summary.css';

const buttonBox: React.CSSProperties = {
  width: '100%',
  display: 'grid',
  gridTemplateRows: 'auto auto',
  gridTemplateColumns: 'auto auto',
  gap: '15px',
  marginLeft: '20px',
  marginTop: '20px',
};

const SummaryCardItemsStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px',
};

const SummaryCardTextBoxStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '220px',
};
const mainTextStyle: React.CSSProperties = {
  fontSize: '30px',
  fontFamily: 'GangwonState',
};

const subTextStyle: React.CSSProperties = {
  fontSize: '20px',
  fontFamily: 'GangwonState',
};

const mainTextList = ['기획합니다', '탁월합니다', '특별합니다', '함께합니다'];
const subTextList = [
  '행사 | 판축물 | 광고대행',
  '기업컨설팅 | 기관 특별강의',
  '독립출판 | 글쓰기 수업',
  '공유작업실 | 커뮤니티 운영',
];

const images = [
  'url("planning.jpg")',
  'url("consulting.jpg")',
  'url("publishing.jpg")',
  'url("shareOffice.jpg")',
];

const SummaryCard = () => {
  const [isVisible, setIsVisible] = useState([true, false, false, false]);
  const [changeColor, setChangeColor] = useState([true, false, false, false]);
  const chagneState = (num: number) => {
    setIsVisible((array) => array.map((value, index) => index === num));
    setChangeColor((array) => array.map((value, index) => index === num));
  };

  const cardBoxStyle: React.CSSProperties = {
    height: '390px',
    padding: '60px 20px',
    marginTop: '30px',
    borderRadius: '30px',
    width: '100%',
    backgroundImage: 'url("planning.jpg")',
    backgroundSize: 'cover',
  };

  const cardBoxStyle_ = (num: number, picture: string): React.CSSProperties => {
    return {
      ...cardBoxStyle,
      display: isVisible[num] ? 'flex' : 'none',
      backgroundImage: picture,
    };
  };

  const summaryButton: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '900',

    cursor: 'pointer',
    position: 'relative',
    padding: '30px 10px',
    width: '100px',
    textDecoration: 'none',
  };

  const summaryButtonStyle = (num: number): React.CSSProperties => {
    return {
      ...summaryButton,
      color: changeColor[num] ? 'white' : 'black',
      backgroundColor: changeColor[num] ? '#C0C0C0 ' : '#A9DFBF',
    };
  };
  return (
    <>
      <div style={{ marginTop: '10px' }}>
        <div style={buttonBox}>
          {mainTextList.map((item, index) => {
            return (
              <button
                className="button-border"
                onClick={() => chagneState(index)}
                style={summaryButtonStyle(index)}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>

        {mainTextList.map((item, index) => {
          return (
            <div key={index} style={cardBoxStyle_(index, images[index])}>
              <div style={SummaryCardItemsStyle}>
                <div style={SummaryCardTextBoxStyle}>
                  <p style={mainTextStyle}>{item}</p>
                  <p style={subTextStyle}>{subTextList[index]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SummaryCard;
