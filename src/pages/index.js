import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getDecoded, getLoginState } from '../auth/auth.states';
import HomeLayouts from '../layouts/home.layouts';

function HomePage() {
   const history = useHistory();

   useEffect(() => {
      if (!getLoginState()) {
         history.push('/login');
      }

      return () => {};
   }, [history]);

   return (
      <HomeLayouts page="home">
         <h1>Home Page</h1>
      </HomeLayouts>
   );
}

export default HomePage;
