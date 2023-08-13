import './App.css';
import ColorBox from './components/storyboard/kimtaeju/ColorBox';
import Title from './components/storyboard/kimtaeju/title';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <FontList></FontList>
        <Kimtaeju></Kimtaeju> */}
        <Routes>
          {/* <Route path="/" element={<Kimtaeju />}></Route> */}
          <Route path="/parkhan" element={<FontList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
