import React from "react"
import FooterItem from "../components/other/FooterItem"

function Footer( {contactRef} ) {

    return(

        <>
        <div ref={contactRef} className="h-px w-full bg-blue-900"></div>
        <section className="font-title flex flex-col lg:flex-row pt-16 pb-48 bg-whitest space-y-12 mb-16">
            <div className="flex items-center mx-auto">
                <figure className="flex flex-col mx-auto space-y-2 max-w-72">
                    <img src="/other/norparts-sa-logo.svg" alt="Logo" />
                    <figcaption className="text-center">Desde 1984 brindando calidad y profesionalismo</figcaption>
                </figure>
            </div>
            <section className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 mx-auto">
                <div className="space-y-4">
                    <h3 className="text-md font-semibold">Contacto</h3>
                    <ul className="space-y-2">
                        <FooterItem showSubtitle={false} icon='/icons/telephone-icon.svg' title='11-6237-2754'></FooterItem>
                        <FooterItem showSubtitle={false} icon='/icons/phone-icon.svg' title='11-3360-0107'></FooterItem>
                        <FooterItem showSubtitle={false} icon='/icons/mail-icon.svg' title='norparts@sinectis.com.ar'></FooterItem>
                        <FooterItem showSubtitle={false} icon='/icons/mail-icon.svg' title='comercial@norparts.com.ar'></FooterItem>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-md font-semibold">Otro</h3>
                    <ul className="space-y-2">
                        <FooterItem icon='/icons/clock-icon.svg' title='Horario de atención:' subtitle='Lunes a Viernes, 9:00 AM a 5:00 PM'></FooterItem>
                        <FooterItem icon='/icons/money-icon.svg' title='Cotizaciones:' subtitle='Dentro de las 24hs hábiles'></FooterItem>
                        <FooterItem icon='/icons/shipping-icon.svg' title='Despachos:' subtitle='Buenos Aires e interior del país'></FooterItem>
                    </ul>
                </div>
            </section>
        </section>
        </>

    )

}

export default Footer