import React, { useEffect } from 'react';
import {} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';

import { slickSettings } from '../utils/slick.settings';
import { getLoginState } from '../auth/auth.states';
import JobCard from '../components/jobs/Card';
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
         <h2 className="text-left">Recommended Jobs</h2>
         <Slider {...slickSettings} className="px-4 mx-4">
            {[1, 2, 3, 4, 5].map((item) => (
               <div key={item}>
                  <JobCard />
               </div>
            ))}
         </Slider>
         <hr />
         <h2 className="text-left">Recent Jobs</h2>
         <div className="d-flex flex-wrap justify-content-start">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
               return (
                  <div className="mx-2" key={item}>
                     <JobCard />
                  </div>
               );
            })}
         </div>
      </HomeLayouts>
   );
}

export default HomePage;
