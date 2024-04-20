import React from "react"

function BannerImage({title, background}) {

    return(

        <>
        <figure className={`${background} bg-cover bg-center bg-blue-300 h-80 p-4 rounded-xl w-full`}>
            <figcaption className="text-white font-semibold bg-blue-700 px-8 py-4 rounded-xl">{title}</figcaption>
        </figure>
        </>

    )

}

export default BannerImage