import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
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
      <div className="bg-light" style={{ minHeight: '100vh' }}>
         <Menu />
         <Container className="p-5">
            <p className="lead ">Search for Jobs and people</p>
            <InputGroup className="mb-3 shadow-sm">
               <FormControl
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="job search"
                  size="lg"
               />
               <InputGroup.Append>
                  <Button size="lg" variant="success">
                     <i className="bx bx-search"></i>
                  </Button>
               </InputGroup.Append>
            </InputGroup>

            <div></div>
         </Container>
      </div>
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
