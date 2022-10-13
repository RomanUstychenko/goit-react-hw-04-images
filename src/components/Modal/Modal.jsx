import  { Component } from 'react'
// import  { useEffect } from 'react'
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom'
import scss from "./Modal.module.scss"

export const modalRoot = document.getElementById("modal-root")




// export default function Modal(onClose, children) {

//   useEffect(() => {
//     console.log('first')
//     document.addEventListener("keydown", closeModal)
    
//     }, [])
//     useEffect(() => {
//       return () => {
//         console.log('second')
//         document.removeEventListener("keydown", closeModal)
//       }
//     }, [])

//   const closeModal  = ({target, currentTarget, code}) => {
//     if (target === currentTarget || code === "Escape") {
//       onClose();
//     }
//   }

//   return createPortal(
//     <div className={scss.Overlay} onClick={closeModal}>
//     <div className={scss.Modal}>
//        {children}
//     </div>
//   </div>,
//   modalRoot
// )
// };
export default class Modal extends Component {

  componentDidMount() {
    console.log('first')
    document.addEventListener("keydown", this.closeModal)
  }

  componentWillUnmount() {
    console.log('second')
    document.removeEventListener("keydown", this.closeModal)
  }
  closeModal  = ({target, currentTarget, code}) => {
    if (target === currentTarget || code === "Escape") {
      this.props.onClose();
    }
   
  }
  render() {
    const { closeModal } = this;
    return createPortal(
        <div className={scss.Overlay} onClick={closeModal}>
        <div className={scss.Modal}>
           {this.props.children}
        </div>
      </div>,
      modalRoot
    )
  }
}
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



