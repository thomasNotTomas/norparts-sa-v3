import React from "react"
import SectionBar from "../components/other/SectionBar"
import BannerImage from "../components/banners/BannerImage"

function Products( {productsRef} ) {

    return(

        <>
        <SectionBar text='ALGUNOS DE NUESTROS PRODUCTOS'></SectionBar>
        <div ref={productsRef} className="flex flex-col space-y-4
        lg:flex-row lg:space-y-0 lg:space-x-4">
            <BannerImage title='Repuestos vehiculares, transmisiones, turbos' background='bg-[url(/banners/car-banner.png)]'></BannerImage>
            <BannerImage title='Bombas hidráulicas y cilindros hidráulicos' background='bg-[url(/banners/pump-banner.png)]'></BannerImage>
            <BannerImage title='Repuestos para rastras, subsoldadoras y herramental de corte' background='bg-[url(/banners/agro-banner.png)]'></BannerImage>
            <BannerImage title='Dientes y cuchillas para corte' background='bg-[url(/banners/saw-banner.png)]'></BannerImage>
            <BannerImage title='Filtros para todo tipo de fluidos' background='bg-[url(/banners/filter-banner.png)]'></BannerImage>
        </div>
        </>

    )

}

export default Products