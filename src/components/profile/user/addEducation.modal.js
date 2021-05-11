import React, { useState, useRef, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function AddEducationModal(props) {
   const { showEduModal, setEduModal } = props;

   const [isUpdating, setIsUpdating] = useState(false);

   const schoolRef = useRef();
   const degreeRef = useRef();
   const descriptionRef = useRef();
   const startDateRef = useRef();
   const endDateRef = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <>
         <Modal
            dialogClassName="modal-min-width-80percent"
            show={showEduModal}
            backdrop="static"
            keyboard={false}
            onHide={() => setEduModal(false)}>
            <Form onSubmit={handleSubmit}>
               <Modal.Header closeButton>
                  <Modal.Title>Create a job</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form.Group>
                     <Form.Label>school</Form.Label>
                     <Form.Control ref={schoolRef} type="text" placeholder="react developer"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>degree</Form.Label>
                     <Form.Control
                        ref={degreeRef}
                        type="text"
                        placeholder="dharan-15, shyam chowk, sunsari"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>description</Form.Label>
                     <Form.Control
                        as="textarea"
                        ref={descriptionRef}
                        type="text"
                        placeholder="dharan-15, shyam chowk, sunsari"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label className="d-block">End Date</Form.Label>
                     <Form.Control ref={startDateRef} type="text" placeholder="07 May, 2011"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label className="d-block">End Date</Form.Label>
                     <Form.Control ref={endDateRef} type="text" placeholder="07 May, 2011"></Form.Control>
                  </Form.Group>
               </Modal.Body>
               <Modal.Footer>
                  <Button type="submit" variant="success" block disabled={isUpdating}>
                     {!isUpdating && <span>Update</span>}
                     {!!isUpdating && <span>processing...</span>}
                  </Button>
               </Modal.Footer>
            </Form>
         </Modal>
      </>
   );
}

export default AddEducationModal;
