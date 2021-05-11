import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { getToken } from '../../auth/auth.states';

function ViewShortListed(props) {
   const { job } = props;
   const { showShortsModal, setShortsModal } = props;

   useEffect(() => {
      axios
         .get(`/api/shortlists/${job.id}`, { headers: { Authorization: getToken() } })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });
      return () => {};
   }, [job]);

   return (
      <>
         <Modal
            dialogClassName="modal-min-width-80percent"
            show={showShortsModal}
            backdrop="static"
            keyboard={false}
            onHide={() => setShortsModal(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Short listed applicants</Modal.Title>
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
               <Button variant="secondary" onClick={() => setShortsModal(false)}>
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

export default ViewShortListed;
