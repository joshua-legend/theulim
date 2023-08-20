import { type } from 'os';
const Title = () => {
  const titlestyle: React.CSSProperties = {
    borderBottom: `2px solid rgba(0,0,0,0.15)`,
    marginTop: `2%`,
    marginBottom: `8%`,
  };
  return (
    <div>
      <h1 style={titlestyle}>Color</h1>
    </div>
  );
};

export default Title;
