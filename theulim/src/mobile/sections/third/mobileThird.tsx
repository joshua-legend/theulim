import React from 'react';
import './mobileThird.css';
import Achievments from '../../../components/achievments/achievments';
// const textStyle: React.CSSProperties = {
//   display: 'flex',
//   justifyContent: 'center',
//   fontSize: '30px',
//   fontWeight: '900',
// };

const thirdSectionStyle: React.CSSProperties = {
  width: '100%',
  height: '1000px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '30px',
  flexDirection: 'column',
};

// const textBoxStyle: React.CSSProperties = {
//   marginTop: '30px',
//   display: 'flex',
//   flexDirection: 'column',
// };

// const historyBoxStyle: React.CSSProperties = {
//   height: '600px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
// };

// const achievments: React.CSSProperties = {
//   fontSize: '34px',
// };

const MobileThird = () => {
  //   const numberTextList = [
  //     '광고대행 프로젝트 완료율:98%',
  //     '기업 변화 사례 : 50건 이상',
  //     '진행된 강의 수 : 100회 이상',
  //     '출간된 도서 수 : 30권 이상',
  //     '개최된 수업 수 : 50회 이상',
  //     '주간 활동 회원 수 : 500명 이상',
  //   ];
  //   const textList = [
  //     '행사 | 판촉물 | 광고대행',
  //     '기업 컨설팅',
  //     '기관 특별강의',
  //     '독립 출판',
  //     '글쓰기 수업',
  //     '공유 작업실 | 커뮤니티 운영',
  //   ];

  return (
    <>
      <section style={thirdSectionStyle}>
        <div className="backgroundClip">theulim</div>
        <div className="backgroundClip2">Achievments</div>
        <Achievments />
        {/* <div style={historyBoxStyle}>
          {numberTextList.map((item, index) => {
            return (
              <div style={textBoxStyle} key={index}>
                <p
                  style={{ ...textStyle, fontSize: '25px', fontWeight: '900' }}
                >
                  {textList[index]}
                </p>

                <p
                  style={{
                    ...textStyle,
                    fontSize: '23px',
                    color: '#97CEC9 ',
                    fontWeight: 'bolder',
                  }}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div> */}
      </section>
    </>
  );
};

export default MobileThird;
