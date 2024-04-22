import React from "react"

function ButtonMenu( { iconmobile, icondesktop, text, onClick} ) {

    return(

        <>
        <button onClick={onClick} className="flex flex-col items-center
                           space-y-2
                           text-white text-sm font-semibold
                           
                           lg:flex-row
                           lg:space-y-0 lg:space-x-4 lg:px-2
                           lg:text-blue-700 lg:text-base">
        <img src={iconmobile} alt="Mobile Icon" className="h-6 w-6 lg:hidden" />
        <img src={icondesktop} alt="Desktop Icon" className="h-8 w-8 hidden lg:block" />
        <h5> {text} </h5>
        </button> 
        </>

    )

}

export default ButtonMenu