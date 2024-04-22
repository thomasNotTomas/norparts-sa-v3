import React from "react"
import ButtonMenu from "../components/buttons/ButtonMenu"

function Header() {

    return(

        <>
        <section className="hidden 
            lg:flex justify-between max-w-7xl
            mx-auto py-8 px-12
            rounded-3xl font-title">
            <img src="/other/norparts-sa-logo.svg" alt="Logo" />
            <nav className="flex space-x-6
                            rounded-3xl">
                <ButtonMenu icondesktop='/icons/truck-brand.svg' text='Areas'></ButtonMenu>
                <ButtonMenu icondesktop='/icons/services-brand.svg' text='Servicios'></ButtonMenu>
                <ButtonMenu icondesktop='/icons/product-brand.svg' text='Productos'></ButtonMenu>
                <ButtonMenu icondesktop='/icons/contact-brand.svg' text='Contacto'></ButtonMenu>
            </nav>
        </section>
        </>

    )

}

export default Header