import React from "react"
import ButtonMenu from "../components/buttons/ButtonMenu"

function Header( { scrollToAreas, scrollToProducts, scrollToServices, scrollToContact } ) {

    return(

        <nav className="bg-[url(/other/background-texture-2.png)] fixed w-full">
        <section className="hidden 
            lg:flex justify-between max-w-7xl
            mx-auto py-8 px-12
            rounded-3xl font-title">
            <img src="/other/norparts-sa-logo.svg" alt="Logo" />
            <nav className="flex space-x-6
                            rounded-3xl
                            px-4">
                <ButtonMenu onClick={scrollToAreas} icondesktop='/icons/truck-brand.svg' text='Areas'></ButtonMenu>
                <ButtonMenu onClick={scrollToServices} icondesktop='/icons/services-brand.svg' text='Servicios'></ButtonMenu>
                <ButtonMenu onClick={scrollToProducts} icondesktop='/icons/product-brand.svg' text='Productos'></ButtonMenu>
                <ButtonMenu onClick={scrollToContact} icondesktop='/icons/contact-brand.svg' text='Contacto'></ButtonMenu>
            </nav>
        </section>
        </nav>

    )

}

export default Header