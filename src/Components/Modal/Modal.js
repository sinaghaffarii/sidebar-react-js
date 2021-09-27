import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Modal = () => {
  return (
    <div className={`modal-overlay `} >
    <div className="modal-container">
      <h3>تغیرات برنامه</h3>
      <button className="close-toggle">
        <FaTimes />
      </button>
    </div>
    </div>
  )
}

export default Modal
