import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { storeToken } from '../../auth/auth.states';
import AuthLayouts from '../../layouts/auth';

const FormContainer = styled.div`
   width: 40%;
   margin: 20px auto;
`;

function CompanySignup() {
   const [isLoading, setIsLoading] = useState(false);

   const nameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      axios
         .post('/api/users/signup', {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            password: passwordRef?.current?.value,
            role: 'user',
         })
         .then((res) => {
            // console.log(res);
            storeToken(res?.data?.token);
         })
         .catch((err) => {
            // console.log(err);
            // console.log(err.response);
            toast.error(err?.response?.data?.name);
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
            <h4 className="text-center">Recruiter Signup</h4>
            <Form onSubmit={handleSubmit}>
               <Form.Group>
                  <Form.Text>Company Name</Form.Text>
                  <Form.Control ref={nameRef} type="text" placeholder="type your company name"></Form.Control>
               </Form.Group>
               <Form.Group>
                  <Form.Text>Email</Form.Text>
                  <Form.Control ref={emailRef} type="email" placeholder="ttype your email"></Form.Control>
               </Form.Group>
               <Form.Group>
                  <Form.Text>Password</Form.Text>
                  <Form.Control ref={passwordRef} type="password" placeholder="type your password"></Form.Control>
               </Form.Group>
               <Form.Group>
                  <Button type="submit" variant="success" block disabled={isLoading}>
                     {!isLoading && <span>Signup as recruiter</span>}
                     {!!isLoading && <span>signing in...</span>}
                  </Button>
               </Form.Group>
               <Form.Group className="d-flex flex-column align-items-center">
                  <Link to="/login/company">Login as recruiter</Link>
                  <Link to="/login">Login as job seeker</Link>
               </Form.Group>
            </Form>
         </FormContainer>
      </AuthLayouts>
   );
}

export default CompanySignup;
