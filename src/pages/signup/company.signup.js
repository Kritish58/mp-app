import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthLayouts from '../../layouts/auth';

const FormContainer = styled.div`
   width: 40%;
   margin: 40px auto;
`;

function CompanySignup() {
   return (
      <AuthLayouts>
         <FormContainer>
            <h4 className="text-center">Recruiter Signup</h4>
            <Form>
               <Form.Group>
                  <Form.Text>Email</Form.Text>
                  <Form.Control type="email" placeholder="your email"></Form.Control>
               </Form.Group>
               <Form.Group>
                  <Form.Text>Password</Form.Text>
                  <Form.Control type="password" placeholder="your password"></Form.Control>
               </Form.Group>
               <Form.Group>
                  <Button variant="success" block>
                     Signup as recruiter
                  </Button>
               </Form.Group>
               <Form.Group className="d-flex flex-column align-items-center">
                  <Link to="/signup/company">Login as recruiter</Link>
                  <Link to="/login">Login as job seeker</Link>
               </Form.Group>
            </Form>
         </FormContainer>
      </AuthLayouts>
   );
}

export default CompanySignup;
