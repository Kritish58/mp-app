import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function CreateJobModal(props) {
   //
   const { showModal, setShowModal } = props;

   const handleCloseModal = () => setShowModal(false);
   const handleShowModal = () => setShowModal(true);
   return (
      <>
         <Button variant="primary" onClick={handleShowModal}>
            Add new job
         </Button>

         <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
               <Modal.Title>Create a job</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal Body</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleCloseModal}>
                  Close
               </Button>
               <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default CreateJobModal;
