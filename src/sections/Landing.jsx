import React from "react"
import TextInput from "../components/other/TextInput"
import ButtonPrimary from "../components/buttons/ButtonPrimary"
import ButtonSecondary from "../components/buttons/ButtonSecondary"

function Landing() {

    return(

        <>
        <section className="flex flex-col lg:flex-row justify-between">
            <form action="" className="flex flex-col mx-auto lg:mx-2 space-y-4 max-w-lg">
                <div className="text-blue-700 space-y-6">
                    <h1 className="text-xxl font-bold">Repuestos y reparaciones para tu empresa</h1>
                    <h2 className="text-xl font-semibold">Desde 1984 brindando calidad y profesionalismo</h2>
                </div>
                <div className="flex flex-col space-y-5">
                    <TextInput placeholder='Ingresa tu nombre'></TextInput>
                    <TextInput placeholder='Ingresa tu mail'></TextInput>
                    <ButtonPrimary text='CONTACTANOS!'></ButtonPrimary>
                </div>
                <ButtonSecondary text='ENVIAR UN WHATSAPP' icon='/icons/whatsapp-icon.svg'></ButtonSecondary>
            </form>
            <img src="/other/truck-banner.png" alt="Landing Banner" className="h-1/2 w-1/2 hidden lg:block" />
        </section>
        </>

    )

}

export default Landing