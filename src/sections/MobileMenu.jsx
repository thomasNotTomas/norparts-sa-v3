import React from "react"
import ButtonMenu from "../components/buttons/ButtonMenu"

function MobileMenu() {

    return(

        <>
        <section className="flex lg:hidden bg-blue-700 fixed w-full bottom-0">
            <div className="flex mx-auto space-x-9 sm:space-x-20 md:space-x-28 py-3 px-4">
                <ButtonMenu iconmobile='/icons/truck-white.svg' text='Areas'></ButtonMenu>
                <ButtonMenu iconmobile='/icons/services-white.svg' text='Servicios'></ButtonMenu>
                <ButtonMenu iconmobile='/icons/product-white.svg' text='Productos'></ButtonMenu>
                <ButtonMenu iconmobile='/icons/contact-white.svg' text='Contacto'></ButtonMenu>
            </div>
        </section>
        </>

    )

}

export default MobileMenu