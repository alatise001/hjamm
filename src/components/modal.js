import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, maxWidth = "max-w-lg" }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full ${maxWidth} max-h-[95vh] overflow-y-auto rounded-xl md:w-fit bg-white shadow-xl`}
            >
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 z-10 text-3xl text-gray-500 hover:text-black"
                >
                    &times;
                </button>

                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;