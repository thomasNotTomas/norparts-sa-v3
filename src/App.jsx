import React from "react"
import { useRef } from "react"
import Header from "./sections/Header"
import MobileMenu from "./sections/MobileMenu"
import Landing from "./sections/Landing"
import Areas from "./sections/Areas"
import Services from "./sections/Services"
import Products from "./sections/Products"
import Footer from "./sections/Footer"

function App() {

  const areasRef = useRef();
  const productsRef = useRef();
  const servicesRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header></Header>
      <MobileMenu 
      scrollToContact={() => scrollToSection(contactRef)}
      scrollToServices={() => scrollToSection(servicesRef)}
      scrollToAreas={() => scrollToSection(areasRef)}></MobileMenu>
      <main className="font-title flex flex-col mx-8 mb-16 lg:py-0 space-y-10 lg:space-y-20 max-w-6xl xl:mx-auto">
        <img src="/other/norparts-sa-logo.svg" alt="Logo" className="lg:hidden mx-auto mt-12" />
        <Landing></Landing>
        <Areas areasRef={areasRef}></Areas>
        <Services servicesRef={servicesRef}></Services>
        <Products productsRef={productsRef}></Products>
      </main>
      <Footer contactRef={contactRef}></Footer>
    </>
  )
}

export default App
