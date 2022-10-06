import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import scss from "./Modal.module.scss"


// export const modalRoot = document.getElementById("modal-root")
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  render() {
    return createPortal(
        <div className={scss.overlay}>
        <div className={scss.modal}>
            <p>dfhgrfgjtyjrth</p>
        {/* <img src={largeImageURL} alt="" /> */}
           {this.props.children}
        </div>
      </div>,
      modalRoot
    )
  }
}
// console.log (Modal ())




