import React from "react"
import ButtonMenu from "../components/buttons/ButtonMenu"

function MobileMenu( { scrollToAreas, scrollToProducts, scrollToServices, scrollToContact } ) {

    return(

        <>
        <section className="font-title flex lg:hidden bg-blue-700 fixed w-full bottom-0">
            <nav className="flex mx-auto space-x-9 sm:space-x-20 md:space-x-28 py-3 px-4">
                <ButtonMenu onClick={scrollToAreas} iconmobile='/icons/truck-white.svg' text='Areas'></ButtonMenu>
                <ButtonMenu onClick={scrollToServices} iconmobile='/icons/services-white.svg' text='Servicios'></ButtonMenu>
                <ButtonMenu onClick={scrollToProducts} iconmobile='/icons/product-white.svg' text='Productos'></ButtonMenu>
                <ButtonMenu onClick={scrollToContact} iconmobile='/icons/contact-white.svg' text='Contacto'></ButtonMenu>
            </nav>
        </section>
        </>

    )

}

export default MobileMenu