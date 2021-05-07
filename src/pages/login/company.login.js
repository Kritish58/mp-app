import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthLayouts from '../../layouts/auth';

const FormContainer = styled.div`
   width: 40%;
   margin: 20px auto;
`;

function CompanyLogin() {
   return (
      <AuthLayouts>
         <FormContainer>
            <h4 className="text-center">Recruiter Login</h4>
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
                  <Button variant="primary" block>
                     Login as recruiter
                  </Button>
               </Form.Group>
               <Form.Group className="d-flex flex-column align-items-center">
                  <Link to="/">Forgot password</Link>
                  <Link to="/signup/company">Create recruiter account</Link>
                  <Link to="/login">Login as job seeker</Link>
               </Form.Group>
            </Form>
         </FormContainer>
      </AuthLayouts>
   );
}

export default CompanyLogin;
