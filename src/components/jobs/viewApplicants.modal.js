import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { getToken } from '../../auth/auth.states';

function ViewApplicants(props) {
   const { job } = props;
   const { showApplicantsModal, setApplicantsModal } = props;

   useEffect(() => {
      axios
         .get(`/api/jobs/${job?.id}/applied-users`, { headers: { Authorization: getToken() } })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.response);
         });
      return () => {};
   }, [job]);

   return (
      <>
         <Modal
            dialogClassName="modal-min-width-80percent"
            show={showApplicantsModal}
            backdrop="static"
            keyboard={false}
            onHide={() => setApplicantsModal(false)}>
            <Modal.Header closeButton>
               <Modal.Title>All applicants</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {[1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                     <div>
                        <Row className="p-2 justify-content-between align-items-center">
                           <Col className="lead">Applicant Name</Col>
                           <Col>applied position</Col>
                           <Col>
                              <Button>view profile</Button>
                           </Col>
                        </Row>
                        {index < 5 && <hr />}
                     </div>
                  );
               })}
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setApplicantsModal(false)}>
                  <span>close</span>
               </Button>
               {/* <Button variant="outline-secondary">
                  <span>go to top</span>
               </Button> */}
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default ViewApplicants;
