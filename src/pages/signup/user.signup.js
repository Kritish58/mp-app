import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { storeDecoded, storeToken } from '../../auth/auth.states';
import AuthLayouts from '../../layouts/auth';

const FormContainer = styled.div`
   width: 40%;
   margin: 20px auto;
`;

function UserSignup() {
   const [isLoading, setIsLoading] = useState(false);

   const nameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();

      setIsLoading(true);
      axios
         .post('/api/users/signup', {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            role: 'user',
         })
         .then((res) => {
            console.log(res);

            storeToken(res?.data?.token);
            storeDecoded(jwtDecode(res?.data?.token));
         })
         .catch((err) => {
            console.log(err);
            console.log(err.response);

            toast.error(err?.response?.data?.name);
            toast.error(err?.response?.data?.email);
            toast.error(err?.response?.data?.password);
            toast.error(err?.response?.data?.error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <AuthLayouts>
         <FormContainer>
            <h4 className="text-center">Job seeker signup</h4>
            <Form onSubmit={handleSubmit}>
               <Form.Group>
                  <Form.Text>Full Name</Form.Text>
                  <Form.Control ref={nameRef} type="text" placeholder="type your full name"></Form.Control>
               </Form.Group>
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
                     {!isLoading && <span>Signup as job seeker</span>}
                     {!!isLoading && <span>signing in...</span>}
                  </Button>
               </Form.Group>
               <Form.Group className="d-flex flex-column align-items-center">
                  <Link to="/login">Login as seeker</Link>
                  <Link to="/login/company">Login as recruiter</Link>
               </Form.Group>
            </Form>
         </FormContainer>
      </AuthLayouts>
   );
}

export default UserSignup;
