import Home from './Home';
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';

const App = () => {
  return(
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/About" element={<About/>}/>
  <Route path="/Services" element={<Services/>}/>
  <Route path="/Contact" element={<Contact/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
  )
}

export default App

