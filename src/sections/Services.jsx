import React from "react"
import SectionBar from "../components/other/SectionBar"
import BannerImage from "../components/banners/BannerImage"

function Services( {servicesRef} ) {

    return(

        <>
        <SectionBar text='ALGUNOS DE NUESTROS SERVICIOS'></SectionBar>
        <div ref={servicesRef} className="flex flex-col space-y-4
        lg:flex-row lg:space-y-0 lg:space-x-4">
        <BannerImage title='Reparación de bombas hidráulicas' background='bg-[url(/banners/pump-banner.png)]'></BannerImage>
        <BannerImage title='Reparación y fabricación de cilindros hidráulicos' background='bg-[url(/banners/hydraulic-banner.png)]'  ></BannerImage>
        <BannerImage title='Turbo' background='bg-[url(/banners/turbo-banner.png)]' ></BannerImage>
        <BannerImage title='Transmisiones' background='bg-[url(/banners/gear-banner.png)]'></BannerImage>
        </div>
        </>

    )

}

export default Services