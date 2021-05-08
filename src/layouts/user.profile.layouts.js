import { motion } from 'framer-motion';
import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/Navbar';

function UserLayouts(props) {
   return (
      <>
         <NavbarComponent />
         <Container>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}>
               <>{props.children}</>
            </motion.div>
         </Container>
      </>
   );
}

export default UserLayouts;
