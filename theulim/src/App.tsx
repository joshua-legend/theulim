import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FontList from './design/font/font';
import ToneAndManner from './design/color';
import MobileFirst from './mobile/sections/first/mobileFirst';
import Mobile from './mobile/mobile';
import Pcboard from './pc/Sections/first/pcboard';
function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/maindisplay" element={<Pcboard />}></Route>
          <Route path="/toneandmanner" element={<ToneAndManner />}></Route>
          <Route path="/mobile" element={<Mobile />}></Route>
          <Route path="/tonandmanner" element={<ToneAndManner />}></Route>
          <Route path="/fontlist" element={<FontList />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Mobile />
    </div>
  );
}

export default App;
