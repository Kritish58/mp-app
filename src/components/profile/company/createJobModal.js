import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const empTypeOpts = [
   { value: 'internship', label: 'internship' },
   { value: 'full-time', label: 'full-time' },
   { value: 'part-time', label: 'part-time' },
   { value: 'remote', label: 'remote' },
   { value: 'non-remote', label: 'non-remote' },
];

const levelOpts = [
   { value: 'internship', label: 'internship' },
   { value: 'entry/junior', label: 'entry/junior' },
   { value: 'mid', label: 'mid' },
   { value: 'senior', label: 'senior' },
   { value: 'expert', label: 'expert' },
];

function CreateJobModal(props) {
   //
   const { showModal, setShowModal } = props;
   const [endDate, setEndDate] = useState(new Date());

   const handleCloseModal = () => setShowModal(false);
   const handleShowModal = () => setShowModal(true);
   return (
      <>
         <Button variant="primary" onClick={handleShowModal}>
            Add new job
         </Button>

         <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleCloseModal}>
            <Form>
               <Modal.Header closeButton>
                  <Modal.Title>Create a job</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form.Group>
                     <Form.Label>Job Title</Form.Label>
                     <Form.Control type="text"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>Job Location</Form.Label>
                     <Form.Control type="text"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>Total applicants</Form.Label>
                     <Form.Control type="number"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>Seniority level</Form.Label>
                     <Select options={levelOpts} isMulti />
                     <Form.Text>
                        <em>
                           Press <b>Ctrl</b> for multiple selection
                        </em>
                     </Form.Text>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>Employment type</Form.Label>
                     <Select options={empTypeOpts} isMulti />
                     <Form.Text>
                        <em>
                           Press <b>Ctrl</b> for multpiple selection
                        </em>
                     </Form.Text>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>Job Status</Form.Label>
                     <Form.Control type="text"></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label>Job Description</Form.Label>
                     <Form.Control as="textarea" rows={4}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                     <Form.Label className="d-block">End Date</Form.Label>
                     <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                  </Form.Group>
               </Modal.Body>
               <Modal.Footer>
                  <Button type="submit" variant="success" block>
                     Finish
                  </Button>
               </Modal.Footer>
            </Form>
         </Modal>
      </>
   );
}

export default CreateJobModal;
