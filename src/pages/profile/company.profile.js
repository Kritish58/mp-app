import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateJobModal from '../../components/profile/company/createJobModal';
import CompanyLayouts from '../../layouts/company.profile.layouts';
import { getDecoded, getToken } from '../../auth/auth.states';
import { observer } from 'mobx-react';
import { Button, Col, Row } from 'react-bootstrap';

const CompanyProfile = observer(() => {
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      // console.log(getDecoded());
      // console.log(getToken());

      axios
         .get(`/api/profiles/${getDecoded()?.id}`, {
            headers: {
               Authorization: getToken(),
            },
         })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.response);
         });
      return () => {};
   }, []);

   return (
      <CompanyLayouts>
         <Row className="my-4 flex-wrap">
            <Col xs={12} md={6} className="p-2 border rounded">
               <img src="/company-logo.png" alt="company logo" height="200" />
               <h1 style={{ fontWeight: 300 }}>Company Name</h1>
               <small>company address</small>
            </Col>
            <Col xs={12} md={6} className="p-3 text-left">
               <div className="my-2">
                  <h5 className="my-0">Name</h5>
                  <small>Maze Runner</small>
               </div>
               <div className="my-2">
                  <h5 className="my-0">Email</h5>
                  <small>company@gmail.com</small>
               </div>
               <div className="my-2">
                  <h5 className="my-0">Address</h5>
                  <small>dharan-15, shyam chowk, sunsari</small>
               </div>
               <hr />
               <div className="my-2">
                  <h5 className="my-0">About</h5>
                  <small>Lorem ipsum dolor sit.</small>
               </div>
               <Button block size="lg" variant="success" onClick={() => setShowModal(true)}>
                  Add new job
               </Button>
            </Col>
         </Row>
         <hr />
         <h2 className="text-left">Jobs Posted</h2>

         <CreateJobModal showModal={showModal} setShowModal={setShowModal} />
      </CompanyLayouts>
   );
});

export default CompanyProfile;
