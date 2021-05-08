import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateJobModal from '../../components/profile/company/createJobModal';
import CompanyLayouts from '../../layouts/company.profile';
import authStates from '../../auth/auth.states';

function CompanyProfile() {
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      // console.log(localStorage.getItem('decoded'));
      console.log('DECODED', authStates.decoded);

      axios
         .get(`/api/profiles/${authStates.decoded.id}`)
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
            console.log(err.response);
         });
      return () => {};
   }, []);

   return (
      <CompanyLayouts>
         <h1 className="mb-4">Company Profile</h1>

         <CreateJobModal showModal={showModal} setShowModal={setShowModal} />
      </CompanyLayouts>
   );
}

export default CompanyProfile;
