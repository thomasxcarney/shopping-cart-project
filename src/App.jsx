import { Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './components/page';
import Navbar from './components/navbar';
import Shop from './components/shop';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
