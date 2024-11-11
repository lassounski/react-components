import classNames from "classnames"
import React from "react"
import { TbInbox } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

export default function Tooltip({ children,
    title,
    style = 'light',
    color = 'default',
    closeCallback,
    ...rest }) {
    const [isVisible, setIsVisible] = React.useState(true)
    const [isFadingOut, setIsFadingOut] = React.useState(false)

    const colorMap = {
        default_light: { tooltip: 'text-gray-800 bg-gray-100', triangle: 'text-gray-100' },
        default_bold: { tooltip: 'text-gray-100 bg-black', triangle: 'text-black' },
        red_light: { tooltip: 'text-red-700 bg-red-100', triangle: 'text-red-100' },
        red_bold: { tooltip: 'text-red-200 bg-red-800', triangle: 'text-red-800' },
        blue_light: { tooltip: 'text-blue-700 bg-blue-100', triangle: 'text-blue-100' },
        blue_bold: { tooltip: 'text-blue-200 bg-blue-800', triangle: 'text-blue-800' },
        green_light: { tooltip: 'text-green-700 bg-green-100', triangle: 'text-green-100' },
        green_bold: { tooltip: 'text-green-200 bg-green-800', triangle: 'text-green-800' },
        gray_light: { tooltip: 'text-gray-700 bg-gray-100', triangle: 'text-gray-700' },
        gray_bold: { tooltip: 'text-gray-200 bg-gray-800', triangle: 'text-gray-800' },
        yellow_light: { tooltip: 'text-yellow-700 bg-yellow-100', triangle: 'text-yellow-100' },
        yellow_bold: { tooltip: 'text-yellow-200 bg-yellow-800', triangle: 'text-yellow-800' },
        indigo_light: { tooltip: 'text-indigo-700 bg-indigo-100', triangle: 'text-indigo-100' },
        indigo_bold: { tooltip: 'text-indigo-200 bg-indigo-800', triangle: 'text-indigo-800' },
        purple_light: { tooltip: 'text-purple-700 bg-purple-100', triangle: 'text-purple-100' },
        purple_bold: { tooltip: 'text-purple-200 bg-purple-800', triangle: 'text-purple-800' },
        pink_light: { tooltip: 'text-pink-700 bg-pink-100', triangle: 'text-pink-100' },
        pink_bold: { tooltip: 'text-pink-200 bg-pink-800', triangle: 'text-pink-800' },
    }

    const cardDefaults = 'relative flex md:flex-row p-3 rounded-xl transition-opacity duration-500'
    const matchingKeyColor = Object.keys(colorMap).find(key => key.includes(color)) ? color : 'default'
    const matchingKeyStyle = Object.keys(colorMap).find(key => key.includes(style)) ? style : 'light'
    const colorResult = colorMap[`${matchingKeyColor}_${matchingKeyStyle}`].tooltip
    const tooltipColorResult = colorMap[`${matchingKeyColor}_${matchingKeyStyle}`].triangle
    const fadingOut = isFadingOut ? 'opacity-0' : 'opacity-100'
    const classesResult = classNames(cardDefaults, colorResult, fadingOut, rest.className)

    const handleClose = () => {
        setIsFadingOut(true)
        setTimeout(() => {
            setIsVisible(false);
        }, 500)
        closeCallback && closeCallback()
    };

    return (
        isVisible && (
            <div className={`flex gap-3 ${classesResult}`}>
                <div>
                    <TbInbox className="text-2xl" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-semibold">
                        {title && title}
                    </p>
                    <p >
                        {children}
                    </p>
                </div>
                <button className="w-6 h-6" onClick={handleClose}>
                    <IoMdClose className="text-2xl" />
                </button>
                <div
                    style={{
                        borderLeft: '16px solid transparent',
                        borderRight: '16px solid transparent',
                        borderTop: `16px solid`,
                    }}
                    className={`absolute left-1/4 transform -translate-x-1/2 bottom-[-16px] ${tooltipColorResult}`}
                />
            </div>
        )
    )
}