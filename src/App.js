
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/Pages/About/About';
import Home from './component/Pages/Home/Home';
import Footer from './component/SharedPages/Footer/Footer';
import Header from './component/SharedPages/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
