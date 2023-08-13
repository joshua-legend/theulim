import './App.css';
import ColorBox from './components/storyboard/kimtaeju/ColorBox';
import Title from './components/storyboard/kimtaeju/title';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FontList from './parkhan/fontList/font';
import ToneAndManner from './components';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/tonandmanner" element={<ToneAndManner />}></Route>
          <Route path="/fontlist" element={<FontList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
