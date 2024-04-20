import React from "react"

function TextInput( {placeholder} ) {

    return(

        <>
        <input type="inputcell" 
               placeholder={placeholder} 
               className="px-4 py-2
               bg-white
               outline outline-2 outline-black" />
        </>

    )

}

export default TextInput