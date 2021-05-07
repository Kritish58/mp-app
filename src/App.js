import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Switch, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// keeping app.css below to override toast css
import './App.css';
import HomePage from './pages';
import CompanyDashboard from './pages/dashboard/company.dashboard';
import UserDashboard from './pages/dashboard/user.dashboard';
import CompanyLogin from './pages/login/company.login';
import UserLogin from './pages/login/user.login';
import CompanySignup from './pages/signup/company.signup';
import UserSignup from './pages/signup/user.signup';
import SingleJobPage from './pages/singleJobPage';
import setBaseUrl from './axios/set.base.url';
import { observer } from 'mobx-react';
import authStates from './auth/auth.states';

const App = observer(() => {
   const location = useLocation();

   useEffect(() => {
      setBaseUrl();
      // initial setting of token
      const token = localStorage.getItem('token');
      const decoded = localStorage.getItem('decoded');
      authStates.setToken(token);
      authStates.setDecoded(decoded);

      return () => {};
   }, []);

   return (
      <>
         <div className="App">
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
            <AnimatePresence exitBeforeEnter initial={false}>
               <Switch location={location} key={location.pathname}>
                  <Route exact path="/">
                     <HomePage />
                  </Route>
                  <Route exact path="/login">
                     <UserLogin />
                  </Route>
                  <Route exact path="/signup">
                     <UserSignup />
                  </Route>
                  <Route path="/login/company">
                     <CompanyLogin />
                  </Route>
                  <Route path="/signup/company">
                     <CompanySignup />
                  </Route>
                  <Route path="/dashboard/company/:company_id">
                     <CompanyDashboard />
                  </Route>
                  <Route exact path="/dashboard/:user_id">
                     <UserDashboard />
                  </Route>
                  <Route path="/jobs/:job_slug_or_job_id">
                     <SingleJobPage />
                  </Route>
                  <Route>
                     <div>
                        <h1>404</h1>
                        <p>Page Not Found</p>
                     </div>
                  </Route>
               </Switch>
            </AnimatePresence>
         </div>
      </>
   );
});

export default App;
