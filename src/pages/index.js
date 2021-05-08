import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { doesTokenExist, getDecoded } from '../auth/auth.states';

function HomePage() {
   const history = useHistory();

   useEffect(() => {
      if (doesTokenExist()) {
         history.push(`/profile/${getDecoded()?.role}/${getDecoded()?.id}`);
         return;
      } else {
         history.push('/login');
      }
      return () => {};
   }, [history]);

   return (
      <div className="p-2">
         <h1>
            PLEASE WAIT... <i className="bx bx-loader-alt bx-spin"></i>
         </h1>
      </div>
   );
}

export default HomePage;
