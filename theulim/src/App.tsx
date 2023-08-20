import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FontList from './design/font/font';
import ToneAndManner from './design/color';
<<<<<<< HEAD
import MobileFirst from './mobile/sections/first/mobileFirst';
import Pcboard from './components/pcboard/pcboard';
=======
import MobileFirst from './parkhan/mobileFirst/mobileFirst';
import Pcboard from './pc/Sections/first/pcboard';
>>>>>>> 6887f394414161d8f7ac67ce62efda120c500642
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
