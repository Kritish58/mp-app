import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Col, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { getDecoded, handleLogout } from '../../auth/auth.states';

const NavbarContainer = styled.div`
   width: 100%;
   background-color: #343a40;
   padding: 40px 0px;
   border-bottom-left-radius: 20%;
   border-bottom-right-radius: 20%;
`;

function NavbarComponent(props) {
   const { page } = props;

   const history = useHistory();

   const logout = () => {
      handleLogout();
      if (page === 'company-profile') history.push('/login/company');
      else history.push('/login');
      return;
   };

   const visitProfile = () => {
      history.push(`/profile/${getDecoded()?.roles}/${getDecoded()?.id}`);
   };

   const goHome = () => {
      history.push('/');
   };

   return (
      <NavbarContainer>
         <Dropdown>
            <Dropdown.Toggle
               id="dropdown-basic"
               variant="dark"
               style={{ position: 'absolute', left: 30, cursor: 'pointer' }}>
               <i className="text-light bx bx-menu bx-flashing" style={{ fontSize: 24 }}></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
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
               {page && page === 'home' && (
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
               )}

               {(page === 'user-profile' || page === 'company-profile') && (
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
            </Dropdown.Menu>
         </Dropdown>

         <Container>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
               <Link to="/">
                  <img src="/logo.png" alt="logo" height="100" style={{ borderRadius: '100%' }} />
               </Link>
               <div>
                  <div className="small text-light">Start your new career, search for jobs companies and people</div>
                  <InputGroup className="mb-3">
                     <FormControl placeholder="job search" size="lg" />
                     <InputGroup.Append>
                        <Button size="lg" variant="success">
                           <i className="bx bx-search"></i>
                        </Button>
                     </InputGroup.Append>
                  </InputGroup>
               </div>
            </div>
         </Container>
      </NavbarContainer>
   );
}

export default NavbarComponent;
