import './../../parkhan/fontList/font.css';

const Pcboard = () => {
  const maindisplaystyle: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    backgroundImage: "url('img3.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const maindisplayfontstyle1: React.CSSProperties = {
    fontWeight: '800',
    fontSize: '55px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '8%',
  };
  const maindisplayfontstyle2: React.CSSProperties = {
    fontWeight: '800',
    fontSize: '55px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  };
  const maindisplayarrangement: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };
  const seconddisplayarrangement: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: 'black',
  };
  const theulimscolor: React.CSSProperties = {
    color: '#2c7d52',
  };
  const headerstyle: React.CSSProperties = {
    width: '100%',
    height: '5%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)',
  };
  const theulimstyle2: React.CSSProperties = {
    color: '#2c7d52',
    marginLeft: '3%',
  };
  const iconstyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
  };
  const google: React.CSSProperties = {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '30px',
    width: 'fit-content',
    padding: '25px',
    marginRight: '20px',
  };
  const apple: React.CSSProperties = {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '30px',
    width: 'fit-content',
    padding: '25px',
    marginLeft: '20px',
  };
  const storearrangemant: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1%',
  };

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
