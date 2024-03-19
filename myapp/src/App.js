
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Login from './components/Login';
import User  from './components/User';
import Admin from './components/Admin';
import Auth from './components/Auth';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
        <Routes>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/User' element={<User/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Admin' element={<Admin/>}/>
        </Routes>
        <Footer/>
      </Auth>
    </div>
  );
}

export default App;
