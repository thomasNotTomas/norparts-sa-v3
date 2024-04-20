import React from "react"

function SectionBar( {text} ) {

    return(

        <>
        <figure>
            <h2 className="text-md md:text-xl text-blue-700 font-semibold">{text}</h2>
            <div 
            className="
            h-1 md:h-2
            bg-blue-700"></div>
        </figure>
        </>

    )

}

export default SectionBar