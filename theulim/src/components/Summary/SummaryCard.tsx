import React, { useState } from 'react';
import { RiUserSettingsLine } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { BiSolidBook } from 'react-icons/bi';
import { HiUserGroup } from 'react-icons/hi';

const buttonBox: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  gap: '5px',
};

const SummaryCardItemsStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
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

const iconList = [
  <RiUserSettingsLine size={100} />,
  <GiTeacher size={100} />,
  <BiSolidBook size={100} />,
  <HiUserGroup size={100} />,
];
const mainTextList = ['기획합니다', '탁월합니다', '특별합니다', '함께합니다'];
const subTextList = [
  '행사 | 판축물 | 광고대행',
  '기업컨설팅 | 기관 특별강의',
  '독립출판 | 글쓰기 수업',
  '공유작업실 | 커뮤니티 운영',
];

const SummaryCard = () => {
  const [isVisible, setIsVisible] = useState([true, false, false, false]);
  const [changeColor, setChangeColor] = useState([true, false, false, false]);
  const chagneState = (num: number) => {
    setIsVisible((array) => array.map((value, index) => index === num));
    setChangeColor((array) => array.map((value, index) => index === num));
  };

  const cardBoxStyle = {
    height: '390px',
    padding: '60px 20px',
    marginTop: '30px',
    borderRadius: '30px',
    width: '100%',
    backgroundColor: '#50C878',
  };

  const cardBoxStyle_ = (num: number): React.CSSProperties => {
    return {
      ...cardBoxStyle,
      display: isVisible[num] ? 'flex' : 'none',
    };
  };

  const summaryButton = {
    fontSize: '14px',
    fontWeight: '600',
    width: '25%',
    height: '44px',
    borderRadius: '20px',
    backgroundColor: 'gainsboro',
    cursor: 'pointer',
  };

  const summaryButtonStyle = (num: number): React.CSSProperties => {
    return {
      ...summaryButton,
      color: changeColor[num] ? 'white' : 'black',
      backgroundColor: changeColor[num] ? '#1F41FF' : 'gainsboro',
    };
  };
  return (
    <>
      <div style={{ marginTop: '10px' }}>
        <div style={buttonBox}>
          {mainTextList.map((item, index) => {
            return (
              <button
                onClick={() => chagneState(index)}
                style={summaryButtonStyle(index)}
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>

        {iconList.map((item, index) => {
          return (
            <div key={index} style={cardBoxStyle_(index)}>
              <div style={SummaryCardItemsStyle}>
                {item}
                <div style={SummaryCardTextBoxStyle}>
                  <p style={mainTextStyle}>{mainTextList[index]}</p>
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
