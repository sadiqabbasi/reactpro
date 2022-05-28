
import './App.css';
import { BrowserRouter, Route, Routes,Link } from "react-router-dom"
import Home from "./Component/Home"
import Bollywood from './Component/Bollywood';
import Technology from './Component/Technology';
import Food from './Component/Food';
import Api from './Component/Api';
import Fitness from './Component/Fitness';
import Hollywood from './Component/Hollywood';
import Homebox from './Pages/Homebox';
function App() {
  return (
    <Api>


      <div className="App">
        <BrowserRouter>
          <Home />
          <Routes>
           <Route path="/Homebox" element= {<Homebox />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />

          </Routes>
        </BrowserRouter>
      </div>
    </Api>
  );
}

export default App;
