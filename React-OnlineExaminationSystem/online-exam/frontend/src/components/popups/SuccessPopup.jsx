import React from 'react';
import './Popup.css'; 

const ConfirmationPopup = ({ isVisible, message, onConfirm, onCancel }) => {
  if (!isVisible) return null;

  return (
    <div className="confirmation-popup">
      <div className="popup-content">
        <p>{message}</p>
        <div className="popup-buttons">
          {/* <button onClick={onConfirm}>OK</button> */}
          <button onClick={onCancel}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
