import { motion } from 'framer-motion';
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';

function AuthLayots(props) {
   return (
      <>
         <Container>
            <motion.div
               initial={{ opacity: 0, marginLeft: 100 }}
               animate={{ opacity: 1, marginLeft: 0 }}
               exit={{ opacity: 0, marginLeft: '-100px' }}
               transition={{ duration: 0.2 }}>
               <>
                  <div className="text-center pt-4">
                     <img src="/logo.png" alt="logo" height="100" />
                  </div>
                  {props.children}
               </>
            </motion.div>
         </Container>
         <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
            <Footer />
         </div>
      </>
   );
}

export default AuthLayots;
