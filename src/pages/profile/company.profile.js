import React, { useState } from 'react';
import CreateJobModal from '../../components/profile/company/createJobModal';
import CompanyLayouts from '../../layouts/company.profile';

function CompanyProfile() {
   const [showModal, setShowModal] = useState(false);

   return (
      <CompanyLayouts>
         <h1 className="mb-4">Company Profile</h1>

         <CreateJobModal showModal={showModal} setShowModal={setShowModal} />
      </CompanyLayouts>
   );
}

export default CompanyProfile;
