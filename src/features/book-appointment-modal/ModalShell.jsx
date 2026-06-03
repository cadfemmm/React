import React from 'react';
import { createPortal } from 'react-dom';
export const ModalShell = ({ open, onClose, width = 540, children, }) => {
    if (!open)
        return null;
    return createPortal(React.createElement("div", { tabIndex: -1, style: {
            backgroundColor: 'rgba(0,0,0,0.45)',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10050,
            overflowY: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
        } },
        React.createElement("button", { type: "button", "aria-label": "Close modal", onClick: onClose, className: "position-absolute top-0 start-0 w-100 h-100 border-0 p-0", style: { backgroundColor: 'transparent', zIndex: 0 } }),
        React.createElement("div", { className: "bg-white rounded-lg shadow-xl position-relative", style: {
                width: '100%',
                maxWidth: width,
                maxHeight: '92vh',
                overflowY: 'auto',
                zIndex: 1,
            } }, children)), document.body);
};