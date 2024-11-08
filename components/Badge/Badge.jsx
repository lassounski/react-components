import classNames from "classnames"
import React from "react"

export default function Badge({children, color, shape, ...rest}) {
    const classes = classNames(color, shape)
    return(
        <>
            {children}
        </>
    )
}