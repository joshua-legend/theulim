import React from 'react';

const buttonBoxStyle: React.CSSProperties = {
  width: '100%',
  height: '44px',
  padding: '0 28px',
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '10px',
  animation: 'slideDown 1s forwards',
  opacity: '1',
};

const buttonStyle: React.CSSProperties = {
  width: '124px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  borderRadius: '10px',
};

const iconStyle: React.CSSProperties = {
  width: '20px',
  height: '20px',
};

const MobileFirstButtons = () => {
  return (
    <>
      <div style={buttonBoxStyle}>
        <button style={buttonStyle}>
          <img style={iconStyle} src="googleplayicon.png" alt="" />
          <span>Google Play</span>
        </button>

        <button style={buttonStyle}>
          <img style={iconStyle} src="appstoreicon.png" alt="" />
          <span>App Store</span>
        </button>
      </div>
    </>
  );
};

export default MobileFirstButtons;
