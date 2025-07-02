import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from './components/Hero/hero';
import Services from "./components/Services/services";
import Pricing from "./components/Pricing/pricing";
import Projects from "./components/Projects/projects";
import Testimonials from "./components/Testimonials/testimonials";
import Footer from "./components/Footer/footer";
import ScrollToTop from "./components/ScrollToTop/scrollToTop";
function App () {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Services/>
            <Pricing/>
            <Projects/>
            <Testimonials/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}
export default App