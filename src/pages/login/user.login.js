import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { storeRole, storeToken } from '../../auth/auth.states';
import AuthLayouts from '../../layouts/auth';

const FormContainer = styled.div`
   width: 40%;
   margin: 20px auto;
`;

function UserLogin() {
   const [isLoading, setIsLoading] = useState(false);

   const emailRef = useRef();
   const passwordRef = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      setIsLoading(true);
      axios
         .post('/api/users/login', { email, password })
         .then((res) => {
            // console.log(res);
            storeToken(res?.data?.token);
            storeRole('user');
         })
         .catch((err) => {
            // console.log(err);
            // console.log(err.response);

            toast.error(err?.response?.data?.email);
            toast.error(err?.response?.data?.password);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <AuthLayouts>
         <FormContainer>
            <h4 className="text-center">Job seeker login</h4>
            <Form onSubmit={(e) => handleSubmit(e)}>
               <Form.Group>
                  <Form.Text>Email</Form.Text>
                  <Form.Control ref={emailRef} type="email" placeholder="your email"></Form.Control>
               </Form.Group>
               <Form.Group>
                  <Form.Text>Password</Form.Text>
                  <Form.Control ref={passwordRef} type="password" placeholder="your password"></Form.Control>
               </Form.Group>
               <Form.Group>
                  <Button type="submit" variant="primary" block disabled={isLoading}>
                     {!isLoading && <span>Login as job seeker</span>}
                     {!!isLoading && <span>logging in...</span>}
                  </Button>
               </Form.Group>
               <Form.Group className="d-flex flex-column align-items-center">
                  <Link to="/">Forgot password</Link>
                  <Link to="/signup">Create seeker account</Link>
                  <Link to="/login/company">Login as recruiter</Link>
               </Form.Group>
            </Form>
         </FormContainer>
      </AuthLayouts>
   );
}

export default UserLogin;
