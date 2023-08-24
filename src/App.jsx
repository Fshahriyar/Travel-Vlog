import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Search from "./components/Search";
import Selects from "./components/Selects";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
   <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <Destinations></Destinations>
     <Search></Search>
     <Selects></Selects>
     <Carousel></Carousel>
     <Footer></Footer>
   </div>
  )
}

export default App;  
