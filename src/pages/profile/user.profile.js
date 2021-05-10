import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserLayouts from '../../layouts/user.profile.layouts';
import { getToken, getDecoded } from '../../auth/auth.states';
import { Button, Col, Row } from 'react-bootstrap';
import JobCard from '../../components/jobs/Card';

function UserProfile() {
   const [user, setUser] = useState(null);
   const [appJobs, setAppJobs] = useState([]);

   useEffect(() => {
      // console.log(getDecoded());
      // console.log(getToken());

      const asyncFunc = async () => {
         try {
            const profile = await axios.get(`/api/profiles/${getDecoded()?.id}`, {
               headers: {
                  Authorization: getToken(),
               },
            });
            console.log(profile);
            setUser(profile.data.user);

            const appliedJobs = await axios.get('/api/applied-jobs', { headers: { Authorization: getToken() } });
            console.log('Applied Jobs', appliedJobs);
            setAppJobs(appliedJobs.data);
            //
         } catch (err) {
            console.log(err);
            console.log(err.response);
         }
      };

      asyncFunc();

      return () => {};
   }, []);

   return (
      <UserLayouts>
         <Row className="my-4">
            <Col xs={12} md={6} className="text-center">
               <img src="/user-profile.png" alt="profile" height="200" width="200" style={{ borderRadius: '100%' }} />
               <p className="lead">{user?.name ?? 'undefined'}</p>
            </Col>
            <Col xs={12} md={6}>
               <h2 className="mb-4">Other details</h2>
               <div className="my-2">
                  <h5 className="my-0">Name</h5>
                  <small>{user?.name ?? 'undefined'}</small>
               </div>
               <div className="my-2">
                  <h5 className="my-0">Email</h5>
                  <small>{user?.email ?? 'undefined'}</small>
               </div>
               <div className="my-2">
                  <h5 className="my-0">Address</h5>
                  <small>{user?.address ?? 'undefined'}</small>
               </div>
            </Col>
         </Row>
         <hr />
         <h3>Applied Jobs</h3>
         <div className="d-flex flex-wrap justify-content-around">
            {appJobs.map((job, index) => {
               return (
                  <div key={index}>
                     <JobCard />
                  </div>
               );
            })}
            {!appJobs.length && (
               <div className="p-4 w-100 bg-light text-center" style={{ border: 'dashed 1px #aaa' }}>
                  <span className="text-muted lead">No jobs applied</span>
               </div>
            )}
         </div>
         <hr />
         <Row>
            <Col xs={12} lg={6} className="p-2 ">
               <div className="border rounded shadow-sm p-3">
                  <div className="d-flex justify-content-between">
                     <h3>Experience</h3>
                     <div>
                        <Button variant="light" size="sm">
                           <i className="bx bx-pencil"></i>
                        </Button>
                     </div>
                  </div>
                  {/* <div>
                     <div>
                        <em className="text-muted">Company: </em> Company Name
                     </div>
                     <div>
                        <em className="text-muted">Designation: </em> React Developer
                     </div>
                     <div>
                        <em className="text-muted">Duration: </em> May - June 2017
                     </div>
                  </div> */}
                  <div className="p-2 mt-2 w-100 bg-light text-center" style={{ border: 'dashed 1px #aaa' }}>
                     <span className="text-muted lead">No experiences added</span>
                  </div>
               </div>
            </Col>
            <Col xs={{ span: 12, order: 'first' }} lg={{ span: 6, order: 1 }} className="p-2 ">
               <div className="border rounded shadow-sm p-3">
                  <div className="d-flex justify-content-between">
                     <h3>Skills</h3>
                     <div>
                        <Button variant="light" size="sm">
                           <i className="bx bx-pencil"></i>
                        </Button>
                     </div>
                  </div>
                  {/* <div>
                     <span className="badge bg-primary text-light mx-1">React</span>
                     <span className="badge bg-primary text-light mx-1">Database</span>
                     <span className="badge bg-primary text-light mx-1">Programming</span>
                  </div> */}
                  <div className="p-2 mt-2 w-100 bg-light text-center" style={{ border: 'dashed 1px #aaa' }}>
                     <span className="text-muted lead">No skills added</span>
                  </div>
               </div>
            </Col>

            <Col xs={12} lg={{ span: 6, order: 2 }} className="p-2 ">
               <div className="border rounded shadow-sm p-3">
                  <div className="d-flex justify-content-between">
                     <h3>Education</h3>
                     <div>
                        <Button variant="light" size="sm">
                           <i className="bx bx-pencil"></i>
                        </Button>
                     </div>
                  </div>
                  {/* <div>
                     <div>
                        <em className="text-muted">University: </em> University Name
                     </div>
                     <div>
                        <em className="text-muted">Degree: </em> React Developer
                     </div>
                     <div>
                        <em className="text-muted">Duration: </em> May - June 2017
                     </div>
                  </div> */}
                  <div className="p-2 mt-2 w-100 bg-light text-center" style={{ border: 'dashed 1px #aaa' }}>
                     <span className="text-muted lead">No educations added</span>
                  </div>
               </div>
            </Col>
         </Row>
         <hr />
      </UserLayouts>
   );
}

export default UserProfile;
