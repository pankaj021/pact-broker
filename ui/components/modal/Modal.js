import React from 'react';
import './Modal.css';

function Modal({isActive, handleModal, content}) {
  let modalText = content || "";
  if (content instanceof Object) {
    modalText = JSON.stringify(content || {});
  }
  if (!isActive) return null;
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-hd'>
        </div>
        <div className='modal-body'>
          { modalText }
        </div>
        <div className='modal-footer'>
          <span className='close-btn' onClick={ () => handleModal(false) }>close</span>
        </div>
      </div>
    </div>
  )
}

export default Modal;