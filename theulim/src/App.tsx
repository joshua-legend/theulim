import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FontList from './parkhan/fontList/font';
import ToneAndManner from './design/color';
import MobileFirst from './parkhan/mobileFirst/mobileFirst';
import Pcboard from './components/pcboard/pcboard';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/maindisplay" element={<Pcboard />}></Route>
          <Route path="/toneandmanner" element={<ToneAndManner />}></Route>
          <Route path="/mobileFirst" element={<MobileFirst />}></Route>
          <Route path="/tonandmanner" element={<ToneAndManner />}></Route>
          <Route path="/fontlist" element={<FontList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
