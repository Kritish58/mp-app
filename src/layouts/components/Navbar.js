import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const NavbarContainer = styled.div`
   width: 100%;
   background-color: #343a40;
   padding: 40px 0px;
   border-bottom-left-radius: 20%;
   border-bottom-right-radius: 20%;
`;

function NavbarComponent() {
   return (
      <NavbarContainer>
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
                           search
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
