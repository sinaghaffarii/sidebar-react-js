import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../../context'

const Modal = () => {

  const {isOpenModal , closeModal} = useGlobalContext()

  return (
    <div className={`${isOpenModal ? ' modal-overlay show-modal' : ' modal-overlay '}`} >
    <div className="modal-container">
      <h3>تغیرات برنامه</h3>
      <button className="close-toggle" onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
    </div>
  )
}

export default Modal
