import React, { useState } from 'react';
import ModalForm from './components/modalForm/ModalForm'; // Import from modalForm folder
import './index.css'; // Import global CSS styles

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <h1>User Details Modal</h1>
      <button className="button-primary" onClick={openModal}>Open Form</button>
      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
