import { motion } from 'framer-motion';
import React from 'react';

function UserLayouts(props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}>
         <>{props.children}</>
      </motion.div>
   );
}

export default UserLayouts;