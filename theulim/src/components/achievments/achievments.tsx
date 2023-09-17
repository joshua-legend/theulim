import React from 'react';
import { ImArrowUp } from 'react-icons/im';

const achievmentsSectionStyle: React.CSSProperties = {
  width: '100%',
  height: '1000px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

const achievmentsBoxStyle: React.CSSProperties = {
  borderRadius: '15px',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  //   border: '1px solid #dbdbdb',
  backgroundColor: '#eae7e0',
  height: '90px',
  whiteSpace: 'nowrap',
};

const textBoxStyle: React.CSSProperties = {
  fontWeight: '900',
  fontSize: '14px',
  fontFamily: 'ascore',
};

const Achievments = () => {
  const mainTextList = [
    '행사 | 판촉물 | 광고대행',
    '기업 컨설팅',
    '기관 특별강의',
    '독립 출판',
    '글쓰기 수업',
    // '공유 작업실 | 커뮤니티 운영',
  ];

  const subTextList = [
    '광고대행 프로젝트 완료율',
    '기업 변화 사례',
    '진행된 강의 수',
    '출간된 도서 수',
    '개최된 수업 수',
    // '주간 활동 회원 수',
  ];

  const achievmentsList = [
    '98%',
    '50 건이상',
    '100회 이상',
    '30권 이상',
    '50회 이상',
    // '500명 이상',
  ];

  const imgList = ['6.png', '7.png', '8.png', '9.png', '10 1.png', '5.png'];
  return (
    <>
      <div style={achievmentsSectionStyle}>
        {mainTextList.map((item, index) => {
          return (
            <div style={achievmentsBoxStyle} key={index}>
              <div style={textBoxStyle}>
                <p style={{ fontSize: '16px' }}>{item}</p>
                <p>{subTextList[index]}</p>
              </div>
              <div>
                <div style={{ fontSize: '21px', fontWeight: '900' }}>
                  <img src={imgList[index]} alt="" width={80} />
                </div>
              </div>
              <div style={{ fontSize: '25px', fontFamily: 'ascore' }}>
                {achievmentsList[index]}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Achievments;
