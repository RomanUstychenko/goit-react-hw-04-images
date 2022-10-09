import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom'
import scss from "./Modal.module.scss"

export const modalRoot = document.getElementById("modal-root")
export default class Modal extends Component {

  componentDidMount() {
    document.addEventListener("keydown", this.closeModal)
  }

  componentWillUnmount() {
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



