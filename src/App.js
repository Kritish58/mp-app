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
               <Route exact path="/" component={() => <HomePage />} />
               <Route path="/user-login" component={() => <UserLogin />} />
               <Route path="/user-signup" component={() => <UserSignup />} />
               <Route path="/company-login" component={() => <CompanyLogin />} />
               <Route path="/company-signup" component={() => <CompanySignup />} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
