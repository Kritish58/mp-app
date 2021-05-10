import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Slider from 'react-slick';
import { Button, Col, Row } from 'react-bootstrap';
import parse from 'html-react-parser';

import { slickSettings } from '../../utils/slick.settings';

import SingleJobPageLayouts from '../../layouts/singleJobPage.layouts';
import JobCard from '../../components/jobs/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getToken } from '../../auth/auth.states';

function SingleJobPage() {
   const [isApplying, setIsApplying] = useState(false);
   const [job, setJob] = useState(null);

   const params = useParams();

   useEffect(() => {
      axios
         .get('/api/jobs/' + params?.job_id, { headers: { Authorization: getToken() } })
         .then((res) => {
            console.log(res);
            setJob(res.data);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.resposne);
         })
         .finally();
      return () => {};
   }, []);

   const applyJob = async (props) => {
      console.log(params);
      console.log('jobId =>', params.job_id);
      console.log('Token =>', getToken());
      try {
         setIsApplying(true);
         const res = await axios.post(
            `/api/applied-jobs`,
            {
               jobId: params?.job_id,
            },
            {
               headers: { Authorization: getToken() },
            }
         );
         console.log(res);
      } catch (err) {
         console.log(err);
         console.log(err.response);
         toast.error('job application failed');
      } finally {
         setIsApplying(false);
      }
   };

   return (
      <SingleJobPageLayouts page="single-job-page">
         <div className="mb-4 ">
            <Row className="my-4 flex-wrap">
               <Col sm={12} md={8} className="p-3">
                  <h6 className="lead">{job?.title}</h6>
                  <Row className="flex-wrap">
                     <Col xs={4} className="my-3">
                        <div>
                           <h6 className="my-0 text-muted small">Industry/Faculty</h6>
                        </div>
                        <div xs={9}>
                           <span className="small">{job?.industry ?? 'unavailable'}</span>
                        </div>
                     </Col>

                     <Col xs={4} className="my-3">
                        <div xs={3}>
                           <h6 className="my-0 text-muted small">Expertise</h6>
                        </div>
                        <div xs={9}>
                           {job?.seniority_level
                              ?.split(',')
                              ?.map((item, index) => (
                                 <span className="small mr-1 badge badge-info text-light">{item}</span>
                              )) ?? 'unavailable'}
                        </div>
                     </Col>

                     <Col xs={4} className="my-3">
                        <div xs={3}>
                           <h6 className="my-0 text-muted small">Employment type</h6>
                        </div>
                        <div xs={9}>
                           {' '}
                           {job?.emp_type
                              ?.split(',')
                              ?.map((item, index) => (
                                 <span className="small mr-1 badge badge-info text-light">{item}</span>
                              )) ?? 'unavailable'}
                        </div>
                     </Col>
                     <Col xs={4} className="my-3">
                        <div xs={3}>
                           <h6 className="my-0 text-muted small">Location</h6>
                        </div>
                        <div xs={9}>
                           <span className="small">{job?.location ?? 'unavailable'}</span>
                        </div>
                     </Col>

                     <Col xs={4} className="my-3">
                        <div xs={3}>
                           <h6 className="my-0 text-muted small">Total Applicants</h6>
                        </div>
                        <div xs={9}>
                           <span className="small">{job?.total_applicants ?? 'unavailable'}</span>
                        </div>
                     </Col>

                     <Col xs={4} className="my-3">
                        <div xs={3}>
                           <h6 className="my-0 text-muted small">Salary</h6>
                        </div>
                        <div xs={9}>
                           <span className="small">{job?.salary ?? 'unavailable'}</span>
                        </div>
                     </Col>

                     <Col xs={4} className="my-3">
                        <div xs={3}>
                           <h6 className="my-0 text-muted small">Deadline</h6>
                        </div>
                        <div xs={9}>
                           <span className="small">{moment(job?.endDate).format('MMM Do YYYY') ?? 'unavailable'}</span>
                        </div>
                     </Col>
                  </Row>

                  <hr />
                  <div className="my-2">
                     <h6 className="my-0 text-muted">Description</h6>
                     {parse(job?.description ?? '<p>No description added</p>')}
                  </div>
                  <Button block disabled={isApplying} size="lg" variant="success" onClick={() => applyJob()}>
                     {!isApplying && <span>Apply</span>}
                     {!!isApplying && <span>processing...</span>}
                  </Button>
               </Col>
               <Col sm={12} md={4} className="p-2">
                  <Row className="flex-column align-items-center justify-content-end">
                     <img src="/company-logo.png" alt="company logo" height="200" width="250" />
                     <h2 style={{ fontWeight: 300 }}>Company Name</h2>
                     <div className="d-flex align-items-center">
                        <i className="mr-2 text-muted bx bx-building"></i> <span>company name</span>
                     </div>
                     <div className="d-flex align-items-center">
                        <i className="mr-2 text-muted bx bx-mail-send"></i> <span>company@gmail.com</span>
                     </div>
                  </Row>
               </Col>
            </Row>
            <hr />

            <h2>similar jobs</h2>
            <Slider {...slickSettings} className="px-4 mx-4">
               {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item}>
                     <JobCard />
                  </div>
               ))}
            </Slider>
            <hr />
         </div>
      </SingleJobPageLayouts>
   );
}

export default SingleJobPage;
