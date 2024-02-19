import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Businesses from "./Pages/Businesses";
import Individual from "./Pages/Individual";
import JoinasDriver from "./Pages/JoinasDriver";
import ScheduleDemo from "./Pages/ScheduleDemo"
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./component/Sections/Navbar/Navbar";
import Careers from "./Pages/Careers";
import './App.css'
import BubbleLayout from "./component/BubbleLayout/BubbleLayout";
import Footer from "./component/Sections/Footer";

const App = () => {

  return (
    <div>
      <div style={{marginTop:'20px'}}>


      <BrowserRouter>
   
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/businesses" element={<Businesses/>} />
          <Route path="/inidividual" element={<Individual/>} />
          <Route path="/joinasdriver" element={<JoinasDriver/>} />
          <Route path="/scheduledemo" element={<ScheduleDemo/>} />
        </Routes>
           <Footer/>
        </BrowserRouter>
   
      </div>
    </div>
  );
};

export default App;
