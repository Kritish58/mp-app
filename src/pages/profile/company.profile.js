import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateJobModal from '../../components/profile/company/createJobModal';
import CompanyLayouts from '../../layouts/company.profile';
import { getDecoded, getToken } from '../../auth/auth.states';
import { observer } from 'mobx-react';

const CompanyProfile = observer(() => {
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      console.log(getDecoded());
      console.log(getToken());

      axios
         .get(`/api/profiles/${getDecoded()?.id}`, {
            headers: {
               Authorization: getToken(),
            },
         })
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
});

export default CompanyProfile;
