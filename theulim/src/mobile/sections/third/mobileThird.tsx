import React from 'react';

const textStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

const thirdSectionStyle: React.CSSProperties = {
  width: '100%',
  height: '700px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '30px',
  flexDirection: 'column',
};

const resonBoxStyle: React.CSSProperties = {
  width: '100%',
};

const textBoxStyle: React.CSSProperties = {
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'column',
};

const MobileThird = () => {
  const numberTextList = ['3000만 원', '60만 명', '40만 건'];
  const textList = ['최대 파트너 수익', '빼기 가입자수', '누적 신청 건수'];

  return (
    <>
      <section style={thirdSectionStyle}>
        <div style={resonBoxStyle}>
          <h1 style={textStyle}>빼기와 함께하면 좋은이유</h1>
          <p
            style={{
              marginTop: '20px',
              fontWeight: '900',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            폐기물 간편배출 서비스인 빼기는 계속해서 성장하고 있습니다. 지금 이
            시간에고 많은 파트너님들이 빼기를 통해 수익을 창출하고 있습니다.
          </p>
        </div>
        <div
          style={{
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {numberTextList.map((item, index) => {
            return (
              <div style={textBoxStyle} key={index}>
                <p
                  style={{
                    ...textStyle,
                    fontSize: '50px',
                    color: '#1f41ff',
                    fontWeight: 'bolder',
                  }}
                >
                  {item}
                </p>
                <p
                  style={{ ...textStyle, fontSize: '25px', fontWeight: '900' }}
                >
                  {textList[index]}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MobileThird;
