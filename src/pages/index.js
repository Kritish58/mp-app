import React, { useState, useEffect } from 'react';
import {} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';

import { slickSettings } from '../utils/slick.settings';
import { getLoginState, getToken } from '../auth/auth.states';
import JobCard from '../components/jobs/Card';
import HomeLayouts from '../layouts/home.layouts';
import axios from 'axios';

function HomePage() {
   const history = useHistory();
   const [recentJobs, setRecentJobs] = useState([]);

   useEffect(() => {
      if (!getLoginState()) {
         history.push('/login');
         return;
      }

      const asyncFunc = async () => {
         try {
            const rcjobs = await axios.get('/api/jobs', { headers: { authorization: getToken() } });
            console.log(rcjobs);
            setRecentJobs(rcjobs.data);
         } catch (err) {
            console.log(err);
            console.log(err.response);
         }
      };

      asyncFunc();

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
            {recentJobs.map((job) => {
               return (
                  <div className="mx-2" key={job.id}>
                     <JobCard job={job} />
                  </div>
               );
            })}
         </div>
      </HomeLayouts>
   );
}

export default HomePage;
