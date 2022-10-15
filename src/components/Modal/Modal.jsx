import  { useEffect } from 'react'
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom'
import scss from "./Modal.module.scss"

export const modalRoot = document.getElementById("modal-root")

export default function Modal({onClose, children}) {

  useEffect(() => {
    window.addEventListener("keydown", closeModal)
    
    }, [onClose])
    useEffect(() => {
      return () => {
        window.removeEventListener("keydown", closeModal)
      }
    }, [onClose])

  const closeModal  = ({target, currentTarget, code}) => {
    if (target === currentTarget || code === "Escape") {
      onClose();
    }
  }

  return createPortal(
    <div className={scss.Overlay} onClick={closeModal}>
    <div className={scss.Modal}>
       {children}
    </div>
  </div>,
  modalRoot
)
};
Modal.propTypes = {
  closeModal: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.string.isRequired,
      currentTarget: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      onClose: PropTypes.func.isRequired,
    })
    ),
};



