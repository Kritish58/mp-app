import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parser from 'html-react-parser';
import Slider from 'react-slick';

import { slickSettings } from '../../utils/slick.settings';
import CreateJobModal from '../../components/profile/company/createJobModal';
import CompanyLayouts from '../../layouts/company.profile.layouts';
import { getDecoded, getToken } from '../../auth/auth.states';
import { observer } from 'mobx-react';
import { Button, Col, Row } from 'react-bootstrap';
import JobCard from '../../components/jobs/Card';

const CompanyProfile = observer(() => {
   const [showModal, setShowModal] = useState(false);
   const [profile, setProfile] = useState(null);

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
            setProfile(res.data);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.response);
         });
      return () => {};
   }, []);

   return (
      <CompanyLayouts page="company-profile">
         <Row className="my-4 flex-wrap">
            <Col xs={12} md={6} className="p-2">
               <img src="/company-logo.png" alt="company logo" height="200" />
               <h1 style={{ fontWeight: 300 }}>{profile?.user?.name}</h1>
            </Col>
            <Col xs={12} md={6} className="p-3 text-left">
               <div className="my-2">
                  <h5 className="my-0 text-muted">
                     <span>Name</span>
                  </h5>
                  <small>
                     <i className="bx bx-building"></i> {profile?.user?.name}
                  </small>
               </div>
               <div className="my-2">
                  <h5 className="my-0 text-muted">
                     <span>Email </span>
                  </h5>
                  <small>
                     <i className="bx bx-mail-send"></i> {profile?.user?.email}
                  </small>
               </div>
               <div className="my-2">
                  <h5 className="my-0 text-muted">Address</h5>
                  <small>
                     <i className="bx bx-map"></i> {profile?.user?.address}
                  </small>
               </div>
               <hr />
               <div className="my-2">
                  <h5 className="my-0 text-muted">About</h5>
                  <small>{parser(profile?.user?.about ?? 'Not added')}</small>
               </div>
               <Button block size="lg" variant="success" onClick={() => setShowModal(true)}>
                  Add new job
               </Button>
            </Col>
         </Row>
         <hr />
         <h2 className="text-left">Jobs Posted</h2>
         <div className="d-flex flex-wrap justify-content-start">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
               return (
                  <div className="mx-2" key={index}>
                     <JobCard />
                  </div>
               );
            })}
         </div>

         <hr />
         <h2 className="text-left">other jobs</h2>

         <div className="mb-5">
            <Slider {...slickSettings} className="px-4 mx-4">
               {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item}>
                     <JobCard />
                  </div>
               ))}
            </Slider>
         </div>

         <CreateJobModal showModal={showModal} setShowModal={setShowModal} />
      </CompanyLayouts>
   );
});

export default CompanyProfile;
