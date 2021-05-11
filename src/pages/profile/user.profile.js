import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import Slider from 'react-slick';

import { slickSettings } from '../../utils/slick.settings';
import UserLayouts from '../../layouts/user.profile.layouts';
import { getToken, getDecoded } from '../../auth/auth.states';
import { Badge, Button, Col, Row } from 'react-bootstrap';
import JobCard from '../../components/jobs/Card';
import { useHistory } from 'react-router';

function UserProfile() {
   const [profile, setProfile] = useState(null);
   const [appliedJobs, setAppliedJobs] = useState([]);

   const [skillOptions, setSkillOptions] = useState(null);
   const [selectedSkills, setSkills] = useState(null);

   const [isAddingSkill, setIsAddingSkill] = useState(false);

   const history = useHistory();

   useEffect(() => {
      // console.log(getDecoded());
      // console.log(getToken());

      // if (getDecoded()?.role !== 'user') {
      //    history.push('/login');
      //    return;
      // }

      const asyncFunc = async () => {
         try {
            // fetch profile
            const prof = await axios.get(`/api/profiles/${getDecoded()?.id}`, {
               headers: {
                  Authorization: getToken(),
               },
            });
            console.log(prof);
            setProfile(prof.data);

            // fetch applied jobs
            const appliedJobs = await axios.get('/api/applied-jobs', { headers: { Authorization: getToken() } });
            console.log('Applied Jobs', appliedJobs);
            setAppliedJobs(appliedJobs.data);

            // fetch skills
            const skills = await axios.get('/api/skills?limit=0', { headers: { Auhorization: getToken() } });
            setSkillOptions(
               skills.data.map((item) => {
                  return { value: item.id, label: item.name };
               })
            );
            //
         } catch (err) {
            console.log(err);
            console.log(err.response);
            if (err.response?.status === 401) history.push('/login');
         }
      };

      asyncFunc();

      return () => {};
   }, [history]);

   const addSkill = () => {
      setIsAddingSkill(true);
      console.log(selectedSkills?.map((item) => item.value));
      axios
         .patch(
            '/api/profiles/' + getDecoded().id,
            {
               ...profile,
               skills: [...profile.skills, ...selectedSkills?.map((item) => item.value)],
            },
            { headers: { Authorization: getToken() } }
         )
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.response);
         })
         .finally(() => {
            setIsAddingSkill(false);
         });
   };

   return (
      <UserLayouts page="user-profile">
         <Row className="my-4">
            <Col xs={12} md={6} className="text-center">
               <img src="/user-profile.png" alt="profile" height="200" width="200" style={{ borderRadius: '100%' }} />
               <p className="lead">{profile?.user?.name ?? 'undefined'}</p>
            </Col>
            <Col xs={12} md={6}>
               <h2 className="mb-4">User details</h2>
               <div className="my-2">
                  <h5 className="my-0">Name</h5>
                  <small>{profile?.user?.name ?? 'undefined'}</small>
               </div>
               <div className="my-2">
                  <h5 className="my-0">Email</h5>
                  <small>{profile?.user?.email ?? 'undefined'}</small>
               </div>
               <div className="my-2">
                  <h5 className="my-0">Address</h5>
                  <small>{profile?.user?.address ?? 'undefined'}</small>
               </div>
            </Col>
         </Row>
         <hr />
         {profile?.user?.id === getDecoded().id && (
            <>
               <h3>Applied Jobs ({appliedJobs?.length})</h3>
               <Slider {...slickSettings} className="px-4 mx-4">
                  {appliedJobs.map((item) => (
                     <div key={item._id}>
                        <JobCard job={item.job} />
                     </div>
                  ))}
               </Slider>
               <hr />
            </>
         )}
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

                  {[1, 2].map((item, index) => {
                     return (
                        <Row key={index} className="flex-wrap p-2 my-3">
                           <Col xs={12}>
                              <h5 className="lead">Title</h5>
                           </Col>
                           <Col xs={5} className="m-2">
                              <div>
                                 <h6 className="my-0 text-muted small">Company</h6>
                              </div>
                              <div>
                                 <span className="small">{'unavailable'}</span>
                              </div>
                           </Col>
                           <Col xs={5} className="m-2">
                              <div>
                                 <h6 className="my-0 text-muted small">Employment type</h6>
                              </div>
                              <div>
                                 <Badge variant="info">{'unavailable'}</Badge>
                              </div>
                           </Col>
                           <Col xs={5} className="m-2">
                              <div>
                                 <h6 className="my-0 text-muted small">Location</h6>
                              </div>
                              <div>
                                 <span className="small">{'dharan-15, shyam chowk, sunsari'}</span>
                              </div>
                           </Col>
                           <Col xs={5} className="m-2">
                              <div>
                                 <h6 className="my-0 text-muted small">Duration</h6>
                              </div>
                              <div>
                                 <span className="small">{'unavailable'}</span>
                              </div>
                           </Col>
                        </Row>
                     );
                  })}
               </div>
            </Col>
            <Col xs={{ span: 12, order: 'first' }} lg={{ span: 6, order: 'first' }} className="p-2 ">
               <div className="border rounded shadow-sm p-3">
                  <div className="d-flex justify-content-between">
                     <h3>Skills</h3>
                  </div>

                  <div className="p-2 mb-2">
                     <div style={{ fontSize: 20 }}>
                        <Badge variant="info">HTML</Badge>
                     </div>
                  </div>
                  <div className="p-2 my-2 w-100 bg-light text-center" style={{ border: 'dashed 1px #aaa' }}>
                     <span className="text-muted lead">No skills added</span>
                  </div>
                  <h6 className="text-muted mt-3">Add skills</h6>
                  <Select options={skillOptions} onChange={(selected) => setSkills(selected)} isMulti />
                  <small>
                     <em>
                        Press <b>Ctrl</b> for multiple selection
                     </em>
                  </small>
                  {/* <div>
                     <span className="badge bg-primary text-light mx-1">React</span>
                     <span className="badge bg-primary text-light mx-1">Database</span>
                     <span className="badge bg-primary text-light mx-1">Programming</span>
                  </div> */}
                  <Button variant="primary" className="my-2" disabled={isAddingSkill} block onClick={() => addSkill()}>
                     {!!isAddingSkill && <span>processing...</span>}
                     {!isAddingSkill && <span>Udpate</span>}
                  </Button>
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
                  {[1, 2].map((item, index) => {
                     return (
                        <Row key={index} className="flex-wrap p-2 my-3">
                           <Col xs={12}>
                              <h5 className="lead">Degree</h5>
                           </Col>
                           <Col xs={5} className="m-2">
                              <div>
                                 <h6 className="my-0 text-muted small">School/University</h6>
                              </div>
                              <div>
                                 <span className="small">{'unavailable'}</span>
                              </div>
                           </Col>
                           <Col xs={5} className="m-2">
                              <div>
                                 <h6 className="my-0 text-muted small">description</h6>
                              </div>
                              <div>
                                 <small className="small">{'unavailable'}</small>
                              </div>
                           </Col>

                           <Col xs={5} className="m-2">
                              <div>
                                 <h6 className="my-0 text-muted small">Duration</h6>
                              </div>
                              <div>
                                 <span className="small">{'unavailable'}</span>
                              </div>
                           </Col>
                        </Row>
                     );
                  })}
               </div>
            </Col>
         </Row>
         <hr />
      </UserLayouts>
   );
}

export default UserProfile;
