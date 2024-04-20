import React from "react"

function FooterItem({icon, title, subtitle, showSubtitle = true}) {

    return(

        <>
        <li className="space-y-1 text-sm">
        <figure className="flex items-center
                           font-bold
                           space-x-2">
            <img src={icon} alt="Icon" className="h-4 w-4" />
            <h5> {title} </h5>
        </figure>
        {showSubtitle && <h6>{subtitle}</h6>}
        </li>
        </>

    )

}

export default FooterItem