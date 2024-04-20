import React from "react"

function ButtonPrimary( {text} ) {

    return(

        <button className="p-4
                           text-white text-md
                           bg-blue-700 hover:bg-blue-900
                           transition-all ease-in-out 500ms">
        <h4>{text}</h4>
        </button>

    )
}

export default ButtonPrimary