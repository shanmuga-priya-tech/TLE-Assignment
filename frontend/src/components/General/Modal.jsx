import { useContext, useEffect, useRef } from "react";
import { HiXMark } from "react-icons/hi2";
import { Themecontext } from "../../context/ThemeContext";

function Modal({ children, onClose }) {
  const { theme } = useContext(Themecontext);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-6 overflow-auto backdrop-blur-sm">
      <div
        ref={modalRef}
        className={`relative w-full max-w-md  rounded-lg shadow-lg transition-all duration-500 border border-gray-400 ${
          theme === "dark" ? "bg-slate-900 text-white" : "bg-gray-50 text-black"
        } p-4 sm:p-6 max-h-[90vh] overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-none border-none p-1 rounded-sm transition-all duration-200 hover:bg-gray-100"
        >
          <HiXMark className="w-6 h-6 text-gray-500 bg-slate-50 rounded-full" />
        </button>

        {children}
      </div>
    </div>
  );
}

export default Modal;
