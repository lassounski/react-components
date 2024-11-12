import classNames from "classnames"
import React, { useState, useEffect } from "react"
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa"
import { IoWarning } from "react-icons/io5"
import { MdError } from "react-icons/md"

// I want to be able to add multiple ToastPopups on the execution of a function to a fixed location of the top right of the screen.
// I need the Popups to stack on each other for the time that they live in case multiple popus are added.
// I can have a ToastPopupManager component that handles the logic of the Portal that has the pop ups.
// For a popup to live it has to be in the DOM, the decision for it to be in the DOM or not is stored in its internal state

export default function ToastPopup({ 
    children,
    title,
    type = 'neutral',
    enteringTime = 500,
    exitingTime = 500,
    duration = 2000,
    ...rest }) {
    const [status, setStatus] = useState('entering');

    // Handle the entering state transition
    useEffect(() => {
        // Start the entering transition
        const enterTimer = setTimeout(() => {
            setStatus('entered'); // Transition to 'entered' state after enteringTime
        }, enteringTime);

        return () => clearTimeout(enterTimer); // Cleanup on unmount or status change
    }, [enteringTime]);

    // Handle the duration and exiting transition
    useEffect(() => {
        // After entering, wait for the duration before starting to exit
        if (status === 'entered') {
            const durationTimer = setTimeout(() => {
                setStatus('exiting'); // Trigger the exit transition after the duration
            }, duration);

            return () => clearTimeout(durationTimer); // Cleanup duration timer
        }
    }, [status, duration]);

    // Handle the final exit state after the exiting transition
    useEffect(() => {
        // Start the final exit transition after exitingTime
        if (status === 'exiting') {
            const exitTimer = setTimeout(() => {
                setStatus('exit'); // After the exit time, set the final 'exit' status
            }, exitingTime);

            return () => clearTimeout(exitTimer); // Cleanup exit timer
        }
    }, [status, exitingTime]);


    const transitionClasses = {
        entering: `opacity-0 scale-95`,
        entered: `opacity-100 scale-100`,
        visible: `opacity-100 scale-100`,
        exiting: `opacity-0 scale-95`,
        exit: `opacity-0 scale-95`,
    };

    const badgeProperties = {
        error: {
            color: 'text-red-700 bg-red-100',
            title: 'Error',
            icon: <MdError className='text-2xl' />
        },
        warning: {
            color: 'text-yellow-700 bg-yellow-100',
            title: 'Warning',
            icon: <IoWarning className='text-2xl' />
        },
        neutral: {
            color: 'text-blue-700 bg-blue-100',
            title: 'Information',
            icon: <FaInfoCircle className='text-2xl' />
        },
        success: {
            color: 'text-green-700 bg-green-100',
            title: 'Success',
            icon: <FaCheckCircle className='text-2xl' />
        },
    }

    const cardDefaults = `relative flex md:flex-row p-3 rounded-xl min-w-[250px] transition-all 
    duration-[${enteringTime}ms] ease-in-out ${transitionClasses[status]}`

    const typePropsResult = badgeProperties.hasOwnProperty(type) ? badgeProperties[type] : badgeProperties['neutral']
    const titleResult = title ? title : typePropsResult.title
    const classesResult = classNames(cardDefaults, typePropsResult.color, rest.className)

    return (

        <div className={`flex gap-3 ${classesResult}`}>
            {status !== 'exit' && (
                <>
                    <div>
                        {typePropsResult.icon}
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-semibold">
                            {titleResult && titleResult}
                        </p>
                        <p >
                            {children}
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}