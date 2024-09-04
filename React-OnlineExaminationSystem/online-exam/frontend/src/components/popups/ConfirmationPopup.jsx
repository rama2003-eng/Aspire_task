import React from 'react';
import '../popups/ConfirmPopup.css';
import { IonIcon } from '@ionic/react';
import { alertCircleOutline, closeOutline } from 'ionicons/icons'; // Import specific icons

const ConfirmationPopup = ({ isVisible, onConfirm, onCancel }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="popup">
            <div className="popup-content">
                <IonIcon icon={alertCircleOutline} style={{ fontSize: '9.0em', color: 'orange' }} />
                <h1>Are you sure?</h1>
                <p>You want to take this exam now. Your time will start automatically.</p>
                <button className="btn confirm-btn" onClick={onConfirm}>Yes, Start Now</button>
                <button className="btn cancel-btn" onClick={onCancel}>Cancel</button>
                <IonIcon 
                    icon={closeOutline} 
                    className="close-icon" 
                    onClick={onCancel} 
                    style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '2em', cursor: 'pointer' }}
                />
            </div>
        </div>
    );
};

export default ConfirmationPopup;
