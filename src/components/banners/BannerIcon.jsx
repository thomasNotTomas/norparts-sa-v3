import React from "react"

function BannerIcon( {icon, title, subtitle} ) {

    return(

        <>
        <figure className="flex items-center space-x-4">
            <img src={icon} alt="Icon" className="h-16 w-16" />
            <figcaption className="space-y-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-base max-w-64">{subtitle}</p>
            </figcaption>
        </figure>
        </>

    )

}

export default BannerIcon