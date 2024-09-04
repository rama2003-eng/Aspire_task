// src/popups/ExamConfirmationPopup.js
import React from 'react';
import { IonIcon } from '@ionic/react';
import { alertCircleOutline, closeOutline } from 'ionicons/icons';
import './ConfirmPopup.css'; // Ensure your styles are applied

const ExamConfirmationPopup = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <IonIcon icon={alertCircleOutline} style={{ fontSize: '9.0em', color: 'orange' }} />
                <h1>{message}</h1>
                <button className="btn confirm-btn" onClick={onConfirm}>Yes</button>
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

export default ExamConfirmationPopup;
