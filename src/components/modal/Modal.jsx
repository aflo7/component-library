import React from 'react';
import './modal.scss';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';


const Modal = () => {
  return (
    <div>

      <Link to="/">
      
      <div className='back-link'>Go back</div>
      </Link>
    <div className="modal-component-wrapper">
      {/* Modal */}
      <div className="modal-wrapper">
        <div className="top-modal">
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <div className="hand-emoji">👋</div>
            <p className="modal-header">Here is the modal's title!</p>
          </div>
          <RxCross1 className="cross-icon" />
        </div>
        <div className="blue-wrapper"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus delectus iure praesentium!
        </p>
        <div className="btn-wrapper">
          <button className="no-thanks-btn">No, thanks</button>
          <button className="get-started-btn">Get started</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Modal;
