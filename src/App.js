import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages';
import CompanyLogin from './pages/login/company.login';
import UserLogin from './pages/login/user.login';
import CompanySignup from './pages/signup/company.signup';
import UserSignup from './pages/signup/user.signup';

function App() {
   return (
      <BrowserRouter>
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
                  <div>
                     <h1>COMPANY DASHBOARD</h1>
                  </div>
               </Route>
               <Route exact path="/dashboard/:user_id">
                  <div>
                     <h1>USER DASHBOARD</h1>
                  </div>
               </Route>
               <Route path="/jobs/:job_slug_or_job_id">
                  <div>
                     <h1>SINGLE JOB PAGE</h1>
                  </div>
               </Route>
               <Route>
                  <div>
                     <h1>404</h1>
                     <p>Page Not Found</p>
                  </div>
               </Route>
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
