import {
  apple,
  google,
  headerstyle,
  iconstyle,
  maindisplayarrangement,
  maindisplayfontstyle1,
  maindisplayfontstyle2,
  maindisplaystyle,
  seconddisplayarrangement,
  storearrangemant,
  theulimscolor,
  theulimstyle2,
} from './firstCss';

const Pcboard = () => {
  return (
    <div style={maindisplaystyle}>
      <div style={headerstyle}>
        <h2 style={theulimstyle2}>더울림</h2>
      </div>
      <div style={maindisplayarrangement}>
        <h1 className="NotoSerifKR" style={maindisplayfontstyle1}>
          <div style={theulimscolor}>더울림</div>으로 모든순간을 브랜드
        </h1>
        <h1 className="NotoSerifKR" style={maindisplayfontstyle2}>
          스토리로 전환하세요.
        </h1>
        <div style={storearrangemant}>
          <div style={google}>
            <img
              style={iconstyle}
              src="	https://www.aplayz.co.kr/media/images/googlestore_icon.png"
              alt=""
            />
            <div>Google Play</div>
          </div>
          <div style={apple}>
            <img
              style={iconstyle}
              src="https://www.aplayz.co.kr/media/images/appstore_icon.png"
              alt=""
            />
            <div>Apple Store</div>
          </div>
        </div>
      </div>
      <div style={seconddisplayarrangement}></div>
    </div>
  );
};

export default Pcboard;
