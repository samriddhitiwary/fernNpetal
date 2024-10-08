import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Header from './Components/Header/Header';
import FNPCarousel from './Components/FNPCarousel/FNPCarousel';
import Events from './Components/Events/Events';
import CuratedGifts from './Components/CuratedGifts/CuratedGifts';
import Joyfull_Stories from './Components/Joyfull_Stories/Joyfull_Stories';
import MiniCarousel from './Components/MiniCarousel/MiniCarousel';
import Gift_In_Trend from './Components/Gift_In_Trend/Gift_In_Trend';
import MiniNavbar2 from './Components/MiniNavbar2/MiniNavbar2';
import Birthday_Collection from './Components/Birthday_Collection/Birthday_Collection';
import Gift_Together from './Components/Gift_Together/Gift_Together';
import Best_Seller from './Components/Best_Seller/Best_Seller';
import Pick_thier_Fav from './Components/Pick_thier_Fav/Pick_thier_Fav';
import Bakery_Cakes from './Components/Bakery_Cakes/Bakery_Cakes';
import Anniversary from './Components/Anniversary/Anniversary';
import Gift_Stories from './Components/Gift_Stories/Gift_Stories';
import Plants from './Components/Plants/Plants';

import Birthday from './pages/Birthday';
import Products from './pages/Products';
import RakhiGifts from './pages/RakhiGifts';
import TeachersDay from './pages/TeachersDay';
import HomeLiving from './pages/HomeLiving';
import { useNavigate } from 'react-router-dom';


import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation(); 

  return (
    <>
      <Header />
      {location.pathname === '/' && (
      <FNPCarousel />
      )}

      <Routes>
        
        <Route path="/" element={<Events />} />

       
        <Route path="/birthday" element={<Products title="Birthday Gifts"/>} />
        <Route path="/rakhi-gifts" element={<Products title="Rakhi Gifts" />} />
        <Route path="/teachers-day" element={<Products title="Gifts for Your teacher"/>} />
        <Route path="/home-living" element={<Products title="Gifts for Your home"/>} />
        <Route path="/products" element={<Products title="Gifts for your special one" />} />
      </Routes>

      
      {location.pathname === '/' && (
        <>
          <CuratedGifts />
          <Joyfull_Stories />
          <MiniCarousel />
          <Gift_In_Trend />
          <MiniNavbar2 />
          <Birthday_Collection />
          <Best_Seller />
          <Pick_thier_Fav />
          <Bakery_Cakes />
          <Anniversary />
          <Gift_Together />
          <Gift_Stories />
          <Plants />
        </>
      )}
      <Footer/>
    </>
  );
}

export default App;