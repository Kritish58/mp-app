import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { handleLogout } from '../../auth/auth.states';

const NavbarContainer = styled.div`
   width: 100%;
   background-color: #343a40;
   padding: 40px 0px;
   border-bottom-left-radius: 20%;
   border-bottom-right-radius: 20%;
`;

function NavbarComponent() {
   const history = useHistory();

   const logout = () => {
      handleLogout();
      if (history?.location?.pathname?.includes('/profile/company')) history.push('/login/company');
      else history.push('/login');
      return;
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
                     <i className="mr-2 bx bx-log-out"></i> <span>Log out</span>
                  </Row>
               </Dropdown.Item>
            </Dropdown.Menu>
         </Dropdown>

         <Container>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
               <div>
                  <img src="/logo.png" alt="logo" height="100" style={{ borderRadius: '100%' }} />
               </div>
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
