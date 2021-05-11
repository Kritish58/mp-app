import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import ReactTooltip from 'react-tooltip';
import { getDecoded, handleLogout } from '../../auth/auth.states';

function Searches() {
   const [input, setInput] = useState('');

   useEffect(() => {
      axios
         .get('/es/search?q=' + input)
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });
      return () => {};
   }, [input]);

   return (
      <>
         <ReactTooltip type="dark" className="p-1" />
         <div className="bg-light" style={{ minHeight: '100vh' }}>
            <Menu />
            <Container className="p-5">
               <p className="lead ">Search for Jobs and people</p>
               <InputGroup className="shadow-sm">
                  <FormControl
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     placeholder="search"
                     size="lg"
                  />
                  <InputGroup.Append>
                     <Button size="lg" variant="success">
                        <i className="bx bx-search"></i>
                     </Button>
                  </InputGroup.Append>
               </InputGroup>

               <div className="p-5 my-3 bg-white border rounded text-muted shadow-sm">
                  <h5 className="lead">No Results Found</h5>
               </div>
               <div className="p-4 my-3 border rounded bg-white rounded shadow-sm">
                  <h5 className="mb-4 lead text-muted">Search Results</h5>

                  <Row className=" flex-wrap align-items-center">
                     <Col>
                        <small className="text-muted">Title</small>
                        <h5>Title</h5>
                     </Col>
                     <Col>
                        <div className="text-muted">
                           <i className="mr-1 small bx bx-user"></i>
                           <small>Name</small>
                        </div>
                        <div>
                           <span>Name</span>
                        </div>
                     </Col>
                     <Col>
                        <div className="text-muted">
                           <i className="mr-1 small bx bx-mail-send"></i> <small>Email</small>
                        </div>
                        <div>
                           <span>Email</span>
                        </div>
                     </Col>
                     <Col>
                        <Button variant="primary" data-tip="view profile">
                           <i className="bx bxs-user"></i>
                        </Button>
                     </Col>
                  </Row>
                  <hr />
               </div>
            </Container>
         </div>
      </>
   );
}

export default Searches;

const Menu = () => {
   const history = useHistory();

   const goHome = () => {
      history.push('/');
   };

   const logout = () => {
      handleLogout();
      if (getDecoded()?.role === 'company') history.push('/login/company');
      else history.push('/login');
      return;
   };

   const visitProfile = () => {
      history.push(`/profile/${getDecoded()?.role}/${getDecoded()?.id}`);
   };
   return (
      <Dropdown style={{ position: 'absolute', top: 10, left: 10 }}>
         <Dropdown.Toggle id="dropdown-basic" variant="light">
            <i className=" bx bx-menu" style={{ fontSize: 24 }}></i>
         </Dropdown.Toggle>

         <Dropdown.Menu>
            {getDecoded()?.role === 'user' && (
               <Dropdown.Item onClick={() => goHome()}>
                  <Row className="align-items-center justify-content-center">
                     <Col sm={3}>
                        <i className="bx bx-home-alt"></i>
                     </Col>
                     <Col sm={9}>
                        <span>home</span>
                     </Col>
                  </Row>
               </Dropdown.Item>
            )}

            <Dropdown.Item onClick={() => visitProfile()}>
               <Row className="align-items-center justify-content-center">
                  <Col sm={3}>
                     <i className="bx bx-user"></i>
                  </Col>
                  <Col sm={9}>
                     <span>profile</span>
                  </Col>
               </Row>
            </Dropdown.Item>

            <Dropdown.Item onClick={() => logout()}>
               <Row className="align-items-center justify-content-center">
                  <Col sm={3}>
                     <i className="mr-2 bx bx-log-out"></i>
                  </Col>
                  <Col sm={9}>
                     <span>log out</span>
                  </Col>
               </Row>
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
