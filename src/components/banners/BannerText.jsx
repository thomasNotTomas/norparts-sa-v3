import React from "react"

function BannerText( {text} ) {

    return(

        <>
        <figure className="bg-blue-700 px-8 py-4">
            <figcaption className="text-white">
                {text}
            </figcaption>
        </figure>
        </>

    )

}

export default BannerText