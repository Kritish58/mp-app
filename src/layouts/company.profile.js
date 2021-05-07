import { motion } from 'framer-motion';
import React from 'react';

function CompanyLayouts(props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}>
         <div className="text-center">{props.children}</div>
      </motion.div>
   );
}

export default CompanyLayouts;
