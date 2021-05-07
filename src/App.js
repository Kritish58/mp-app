import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages';
import CompanyDashboard from './pages/dashboard/company.dashboard';
import UserDashboard from './pages/dashboard/user.dashboard';
import CompanyLogin from './pages/login/company.login';
import UserLogin from './pages/login/user.login';
import CompanySignup from './pages/signup/company.signup';
import UserSignup from './pages/signup/user.signup';
import SingleJobPage from './pages/singleJobPage';

function App() {
   return (
      <HashRouter>
         <div className="App">
            <Switch>
               <Route exact path="/">
                  <HomePage />
               </Route>
               <Route path="/login">
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
         </div>
      </HashRouter>
   );
}

export default App;
