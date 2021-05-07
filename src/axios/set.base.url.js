import axios from 'axios';

const setBaseUrl = () => {
   axios.defaults.baseURL = 'https://recruiter.ifotechservice.com';
};

export default setBaseUrl;
