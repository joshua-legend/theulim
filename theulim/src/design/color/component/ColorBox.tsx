type colorproups = {
  Hex: string;
};
const ColorBox = ({ Hex }: colorproups) => {
  const boxstyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    backgroundColor: `${Hex}`,
  };
  return (
    <div>
      <div>
        <div style={boxstyle}></div>
        <span>Hex: {Hex}</span>
      </div>
    </div>
  );
};

export default ColorBox;
