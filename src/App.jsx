import React from "react"
import Header from "./sections/Header"
import MobileMenu from "./sections/MobileMenu"
import Landing from "./sections/Landing"
import Areas from "./sections/Areas"
import Services from "./sections/Services"
import Products from "./sections/Products"
import Footer from "./sections/Footer"

function App() {

  return (
    <>
      <Header></Header>
      <MobileMenu></MobileMenu>
      <main className="font-title flex flex-col mx-8 mb-16 lg:py-0 space-y-10 lg:space-y-20 max-w-6xl xl:mx-auto">
        <img src="/other/norparts-sa-logo.svg" alt="Logo" className="lg:hidden mx-auto mt-12" />
        <Landing></Landing>
        <Areas></Areas>
        <Services></Services>
        <Products></Products>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
