
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DoctorDetails from './component/DoctorDetails/DoctorDetails/DoctorDetails';
import About from './component/Pages/About/About';
import Home from './component/Pages/Home/Home';
import Login from './component/Pages/Login/Login/Login';
import Signup from './component/Pages/Login/Signup/Signup';
import Footer from './component/SharedPages/Footer/Footer';
import Header from './component/SharedPages/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='doctor/:doctorId' element={<DoctorDetails></DoctorDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
