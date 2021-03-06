import React from 'react';

import Modal from './Modal';

import './styles/DeleteBadgeModal.css';

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className='DeleteBadgeModal'>
        <h1>ARE YOU SURE?</h1>
        <p>
          You are about to delete {props.firstName} {props.lastName} from the
          Conf.
        </p>
        <div className='DeleteBadgeModal__controls'>
          <button onClick={props.onDeleteBadge} className='btn btn-warning'>
            Delete
          </button>
          <button onClick={props.onClose} className='btn'>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
