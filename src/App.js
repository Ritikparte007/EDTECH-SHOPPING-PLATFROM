import './App.css';
import Header from './Compontes/Header';
import Main from './Compontes/Main';
import Ranked from './Compontes/Ranked';
import Country from './Compontes/Country';
import Footer from './Compontes/Footer';
import Course from './Compontes/Course';
import Account from './Compontes/Account';
import Maincontainer from './Compontes/Maincontainer';
import Video from './Compontes/Video';
import Band from './Compontes/Band';
import { Route, Routes } from 'react-router-dom';
import main from './Compontes/Main'
import Buyproduct from './Compontes/Buyproduct';
import Login from './Compontes/Login'
import Maincourse from './Compontes/Maincourse';
import Sidebar from './Compontes/Sidebar';
import Coursevideo from './Compontes/Coursevideo';
import Aboutus from './Compontes/Aboutus';
import Termsofuse from './Compontes/Termsofuse';
import Privacypolicy from './Compontes/Privacypolicy';
import Contact from "./Compontes/Contact";
import Faq from './Compontes/FaQ';
import Admin from './Compontes/Adminpaneal/Admin';
import RazorpayPayment from './Compontes/RazorpayPayment';

function App() {
  return (
    <div>

     

      <Routes>

        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/account' element={<Account></Account>}></Route>
        <Route path='/Buyproduct' element={<Buyproduct></Buyproduct>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sidebar' element={<Sidebar></Sidebar>}></Route>
        <Route path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route path='/Coursevideo' element={<Coursevideo></Coursevideo>}></Route>
        <Route path='/termsofuse' element={<Termsofuse></Termsofuse>}></Route>
        <Route path='/Privacypolicy' element={<Privacypolicy></Privacypolicy>}></Route>
        <Route path='/Maincourse' element={<Maincourse></Maincourse>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
        <Route path='/Faq' element={<Faq></Faq>}></Route>
        <Route path='/Admin' element={<Admin></Admin>}></Route>
        <Route path='/buy' element={<RazorpayPayment></RazorpayPayment>}></Route>
        
      </Routes>
      
    </div>
   
  );
}

export default App;
