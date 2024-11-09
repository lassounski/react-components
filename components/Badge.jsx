import classNames from "classnames"
import React from "react"

export default function Badge({ children, color, shape, ...rest }) {
    const badgeBasicStyle = 'px-3 py-1  min-w-16'
    const shapeResult = shape === 'pill' ? 'rounded-xl' : ''

    const colorMap = {
        red: 'text-red-700 bg-red-100',
        blue: 'text-blue-700 bg-blue-100',
        green: 'text-green-700 bg-green-100',
        gray: 'text-gray-700 bg-gray-100',
        yellow: 'text-yellow-700 bg-yellow-100',
        indigo: 'text-indigo-700 bg-indigo-100',
        purple: 'text-purple-700 bg-purple-100',
        pink: 'text-pink-700 bg-pink-100'
    }

    const colorResult = colorMap[color] || ''


    const classes = classNames(badgeBasicStyle, colorResult, shapeResult)
    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    )
}