import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateJobModal from '../../components/profile/company/createJobModal';
import CompanyLayouts from '../../layouts/company.profile.layouts';
import { getDecoded, getToken } from '../../auth/auth.states';
import { observer } from 'mobx-react';
import { Button, Card, Col, Row } from 'react-bootstrap';

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
         <div className="d-flex flex-wrap justify-content-around">
            {[1, 2, 3, 4, 5, 6].map((item) => {
               return (
                  <Card className="my-4 my-lg-1 my-xl-4 shadow-sm" style={{ maxWidth: 300, minWidth: 300 }} key={item}>
                     <div className="">
                        <Card.Img variant="top" src="/company-logo.png" style={{ maxHeight: 200, maxWidth: 200 }} />
                     </div>
                     <Card.Body className="text-left">
                        <Card.Title>Job Title</Card.Title>
                        <small className="d-block">
                           <em>company: </em> Job Company
                        </small>
                        <small className="d-block">
                           <em>location: </em> Job Location
                        </small>
                        <small className="d-block">
                           <em>industry: </em> Job Industry
                        </small>
                        <small className="d-block">
                           <em>expertise: </em> Seniority Level
                        </small>
                        <Button
                           className="mt-2 d-flex justify-content-center align-items-center"
                           variant="primary"
                           block>
                           <p style={{ marginBottom: 3 }}>view</p> <i className="ml-2 bx bx-arrow-to-right"></i>
                        </Button>
                     </Card.Body>
                  </Card>
               );
            })}
         </div>

         <hr />
         <h2 className="text-left">other jobs</h2>
         <div className="d-flex flex-wrap justify-content-around">
            {[1, 2, 3, 4, 5, 6].map((item) => {
               return (
                  <Card className="my-4 my-lg-1 my-xl-4 shadow-sm" style={{ maxWidth: 300, minWidth: 300 }} key={item}>
                     <div className="">
                        <Card.Img variant="top" src="/company-logo.png" style={{ maxHeight: 200, maxWidth: 200 }} />
                     </div>
                     <Card.Body className="text-left">
                        <Card.Title>Job Title</Card.Title>
                        <small className="d-block">
                           <em>company: </em> Job Company
                        </small>
                        <small className="d-block">
                           <em>location: </em> Job Location
                        </small>
                        <small className="d-block">
                           <em>industry: </em> Job Industry
                        </small>
                        <small className="d-block">
                           <em>experience: </em> Seniority Level
                        </small>
                        <Button
                           className="mt-2 d-flex justify-content-center align-items-center"
                           variant="primary"
                           block>
                           <p style={{ marginBottom: 3 }}>view</p> <i className="ml-2 bx bx-arrow-to-right"></i>
                        </Button>
                     </Card.Body>
                  </Card>
               );
            })}
         </div>
         <Button variant="outline-dark">Load more</Button>

         <CreateJobModal showModal={showModal} setShowModal={setShowModal} />
      </CompanyLayouts>
   );
});

export default CompanyProfile;
