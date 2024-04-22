import React from "react"
import SectionBar from "../components/other/SectionBar"
import BannerIcon from "../components/banners/BannerIcon"

function Areas( {areasRef} ) {

    return(

        <>
        <SectionBar text='AREAS EN LAS QUE TRABAJAMOS'></SectionBar>
        <div ref={areasRef} className="flex flex-col space-y-12">
            <BannerIcon icon='/icons/agro-solid.png' title='Agro'></BannerIcon>
            <BannerIcon icon='/icons/truck-solid.png' title='Transporte'></BannerIcon>
            <BannerIcon icon='/icons/port-solid.png' title='Terminales Portuarias'></BannerIcon>
            <BannerIcon icon='/icons/construction-solid.png' title='Construcción'></BannerIcon>
            <BannerIcon icon='/icons/industry-solid.png' title='Industria'></BannerIcon>
        </div>
        </>

    )

}

export default Areas