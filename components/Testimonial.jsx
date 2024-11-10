import classNames from "classnames"
import React from "react"
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonial({ children,
    author,
    title,
    picture,
    ...rest }) {

    const cardDefaults = 'flex flex-col md:flex-row bg-blue-700 text-white relative overflow-visible'
    const classesResult = classNames(cardDefaults, rest.className)
    const pictureResult = picture &&
        <div className="self-center mt-6 md:mt-0 relative">
            {
                React.cloneElement(picture, {
                    className: 'w-full h-auto object-cover md:-mt-14 md:-mb-14'
                })
            }
        </div>
    return (
        <div className={`${classesResult}`}>
            {pictureResult}
            <div className="flex flex-col">
                <p className="w-10/12 text-left self-start ml-8">
                    <FaQuoteLeft className="mt-8 mb-2 text-blue-200 text-lg" /> {children}
                </p>
                <div className="ml-8 mb-4">
                    {
                        author &&
                        <p className="pt-10 font-medium text-xl">
                            {author}
                        </p>}
                    {
                        title &&
                        <p className="font-extralight text-lg">
                            {title}
                        </p>
                    }
                </div>
            </div>
        </div>
    )
}