import './App.css';

import Kimtaeju from './kimtaeju/kimtaeju';
import FontList from './parkhan/fontList/font';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <FontList></FontList>
        <Kimtaeju></Kimtaeju> */}
        <Routes>
          <Route path="/kimtaeju" element={<Kimtaeju />}></Route>
          <Route path="/parkhan" element={<FontList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
