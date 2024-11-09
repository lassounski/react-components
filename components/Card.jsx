import classNames from "classnames"
import React from "react"
import { FaInfoCircle } from "react-icons/fa"

export default function Card({ children,
    title,
    icon,
    ...rest }) {

    const cardDefaults = 'flex flex-col shadow-[0px_0px_6px_2px_rgba(0,0,0,0.1)] p-4 rounded-lg bg-[#F9FAFB] relative'
    const iconResult = icon ? icon : <FaInfoCircle />
    const classesResult = classNames(cardDefaults, iconResult, rest.className)

    return (
        <div className={`${classesResult}`}>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2
            flex items-center justify-center ">
                {
                    React.cloneElement(iconResult, {
                        className: `bg-blue-500 text-white p-1 ${iconResult.props.className || ''} w-12 h-12 rounded-xl text-4xl stroke-2`
                    })
                }
            </div>
            <div className="flex flex-col items-center">
                {
                    title &&
                    <p className="pt-10 font-medium text-xl">
                        {title}
                    </p>
                }
                <p className="pt-6 w-10/12 text-gray-400 text-center">
                    {children}
                </p>
            </div>
        </div>
    )
}