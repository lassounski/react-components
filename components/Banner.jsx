import classNames from "classnames"
import React from "react"
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa"
import { IoWarning } from "react-icons/io5"
import { MdError } from "react-icons/md"

export default function Banner({ children,
    type = 'neutral',
    title,
    ...rest }) {
    const badgeProperties = {
        error: {
            color: 'text-red-700 bg-red-100',
            title: 'There is a problem with your application',
            icon: <MdError className='text-2xl' />
        },
        warning: {
            color: 'text-yellow-700 bg-yellow-100',
            title: 'Attention',
            icon: <IoWarning className='text-2xl' />
        },
        neutral: {
            color: 'text-blue-700 bg-blue-100',
            title: 'Update available',
            icon: <FaInfoCircle className='text-2xl' />
        },
        success: {
            color: 'text-green-700 bg-green-100',
            title: 'Congratulations!',
            icon: <FaCheckCircle className='text-2xl' />
        },
    }
    const typeNormalized = badgeProperties.hasOwnProperty(type) ? type : 'neutral'

    const badgeDefaults = 'px-10 py-4 min-w-full max-w-full md:max-w-lg lg:max-w-2xl'
    const shapeResult = children ? 'rounded-xl' : ''
    const colorResult = (badgeProperties[typeNormalized] || badgeProperties['neutral']).color;
    const iconResult = (badgeProperties[typeNormalized] || badgeProperties['neutral']).icon;
    const titleResult = title ? title : badgeProperties[typeNormalized].title;
    const classesResult = classNames(badgeDefaults, colorResult, shapeResult, rest.className)
    
    return (
        <div className={`flex gap-3 ${classesResult}`}>
            <div>
                {iconResult}
            </div>
            <div className="flex flex-col gap-3">
                <p className="font-semibold">
                    {titleResult}
                </p>
                <p >
                    {children}
                </p>
            </div>
        </div>
    )
}