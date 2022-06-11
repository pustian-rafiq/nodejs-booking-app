import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/hotel' element={<List/>} />
        <Route path='/hotel/:id' element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
