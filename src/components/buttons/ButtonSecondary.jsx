import React from "react"

function ButtonSecondary( {icon, text} ) {

    return(

        <>
        <button className="p-4 space-x-2
                           flex justify-center
                           text-white text-md
                           bg-green-700 hover:bg-green-900
                           transition-all ease-in-out 500ms">
        <img src={icon} alt="Button Icon" className="h-6 w-6" />
        <h4>{text}</h4>
        </button>
        </>

    )

}

export default ButtonSecondary