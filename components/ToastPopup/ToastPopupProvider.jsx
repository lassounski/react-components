import React, { useState, createContext, useContext } from "react"
import ReactDOM from "react-dom";

const ToastContext = createContext();

export default function ToastPopupProvider({children}) {
    const [popups, setPopups] = useState([])
    
    // Function to add a popup
    const addPopup = (toastPopup) => {
        const id = Date.now();
        const duration = toastPopup.props.duration || 5000; // Default duration to 5 seconds if not provided

        setPopups((prev) => [
            ...prev,
            { id, component: toastPopup, duration }
        ]);

        // Set a timer to remove the popup after its duration
        setTimeout(() => {
            setPopups((prev) => prev.filter((p) => p.id !== id));
        }, duration);
    };

    const toastContainer = (
        <div className="fixed top-0 right-0 p-4 z-50 flex flex-col gap-6">
            {popups.map(({ id, component }) => (
                <div key={id}>{component}</div>
            ))}
        </div>
    );

    return (
        <ToastContext.Provider value={{ addPopup }}>
            {children}
            {ReactDOM.createPortal(toastContainer, document.body)}
        </ToastContext.Provider>
    )
}

export const useToast = () => {
    return useContext(ToastContext);
};