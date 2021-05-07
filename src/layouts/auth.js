import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
   max-width: 1200px;
   margin: auto;
`;

function AuthLayots(props) {
   return (
      <AuthContainer>
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
      </AuthContainer>
   );
}

export default AuthLayots;
