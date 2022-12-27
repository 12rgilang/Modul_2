import React, { useState } from 'react';

function Modal() {
  // State variables to control the modal's visibility and content
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Modal Title');
  const [modalBody, setModalBody] = useState('Modal body text goes here.');

  // Function to show the modal
  function showModal() {
    setIsOpen(true);
  }

  // Function to hide the modal
  function hideModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* Render the trigger element (e.g. a button) */}
      <button onClick={showModal}>Open Modal</button>

      {/* Conditionally render the modal based on the isOpen state variable */}
      {isOpen && (
        <div>
          <div className="bg-gray-500 opacity-75"></div>
          <div className="bg-white rounded-lg shadow-xl">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              {modalTitle}
            </h3>
            <div>
              <p className="text-sm leading-5 text-gray-500">
                {modalBody}
              </p>
            </div>
            <div>
              {/* Render the close button */}
              <button onClick={hideModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default Modal