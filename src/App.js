import { Routes, Route } from 'react-router-dom'

// import our page components
import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
import NationalParks from './pages/national_parks/NationalParks';
import Mountains from './pages/mountains/Mountains';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nationalparks" element={<NationalParks />} />
        <Route path="/Mountains" element={<Mountains />} />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
