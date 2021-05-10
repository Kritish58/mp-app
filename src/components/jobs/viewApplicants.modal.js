import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
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
               <h2>Modal body</h2>
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
