import React, { useEffect } from 'react';
import axios from 'axios';
import UserLayouts from '../../layouts/user.profile.layouts';
import { getToken, getDecoded } from '../../auth/auth.states';
import { Col, Row } from 'react-bootstrap';

function UserProfile() {
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
      <UserLayouts>
         <Row className="my-4">
            <Col xs={12} md={6} className="text-center">
               <img src="/user-profile.png" alt="profile" height="200" width="200" style={{ borderRadius: '100%' }} />
               <p className="lead">User name</p>
            </Col>
            <Col xs={12} md={6}>
               <h2 className="mb-4">Other details</h2>
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
            </Col>
         </Row>
         <hr />
         <Row>
            <Col className="p-3">
               <h2>Skills</h2>
               <div className="p-2 my-2">
                  <div className="lead">React</div>
                  <small>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque tempore magni officiis odio
                     perferendis aspernatur maxime delectus in fugiat!
                  </small>
               </div>
               <div className="p-2 my-2">
                  <div className="lead">React</div>
                  <small>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque tempore magni officiis odio
                     perferendis aspernatur maxime delectus in fugiat!
                  </small>
               </div>
               <div className="p-2 my-2">
                  <div className="lead">React</div>
                  <small>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eaque tempore magni officiis odio
                     perferendis aspernatur maxime delectus in fugiat!
                  </small>
               </div>
            </Col>
         </Row>
         <hr />
      </UserLayouts>
   );
}

export default UserProfile;
