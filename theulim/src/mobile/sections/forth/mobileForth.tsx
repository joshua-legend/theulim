import React from 'react';
import './mobileForth.css';

const locationSectionStyle: React.CSSProperties = {
  padding: '80px 20px',
  backgroundColor: 'rgb(247, 248, 250)',
};

const locationBoxStyle: React.CSSProperties = {
  height: 'fit-content',
  width: '100%',
  backgroundColor: 'white',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '45px 0',
};

const locationItemBoxStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const locationNameStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: '900',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'center',
};

const iconBoxStyle: React.CSSProperties = {
  display: 'flex',
  height: '200px',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '#f7f8fa',
};

const MobileForth = () => {
  //const locationNameList = [
  //'제주 본사',
  // '서울 오피스',
  // '대구 오피스',
  // '대전 오피스',
  // '광주 오피스',
  // '부산 오피스',
  //];

  const locationInformation = {
    jeju: {
      kr: '인천 본사',
      location: '인천시 서구 청라루비로 134번길 6-6 , 104호',
    },
  };

  //const locationInformationList = [
  //'제주특별자치도 제주시 연마길42',
  // '서울특별시 성동구 왕십리로 83-21,디타워 서울포레스트 3-5층',
  // '대전광역시 유성구 노은로 157,돌드프라자 202호',
  // '광주광력시 서구 상무시민로 75, 광주가톨릭평화방송빌딩 502호',
  // '부산돵역시 남구 전포대로 133, 오피스동 11층',
  //];

  return (
    <>
      <section style={locationSectionStyle}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '100px',
              marginTop: '200px',
            }}
          >
            오피스 위치
          </h1>
          <div className="pic2">
            <img src="theulim.jpg" alt="" />
          </div>
        </div>
        <div style={locationBoxStyle}>
          <div style={locationItemBoxStyle}>
            <div style={locationNameStyle}>{locationInformation.jeju.kr}</div>
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'ascore',
              }}
            >
              {locationInformation.jeju.location}
            </div>
          </div>
        </div>
      </section>
      <div style={iconBoxStyle}>
        <img src="instaLogo.png" alt="" width={80} />
        <img src="faceBookLogo.png" alt="" width={100} />
        <img src="youtubeLogo.png" alt="" width={80} />
      </div>
      <div className="pic">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.6055336602894!2d126.64060949169668!3d37.53603986466775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7fa5efaa10a5%3A0xc77786666d71a8fa!2z7J247LKc6rSR7Jet7IucIOyEnOq1rCDssq3rnbzro6jruYTroZwxMzTrsojquLggNi02IDEwNO2YuA!5e0!3m2!1sko!2skr!4v1694308935636!5m2!1sko!2skr"
            width="600"
            height="450"
            style={{
              padding: '10px',
              border: '5px solid #D3D3D3',
            }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MobileForth;
