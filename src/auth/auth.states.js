import { observable } from 'mobx';

const authStates = observable({
   token: '',
   role: '',
   // token stored here to avoid frequent localstorage access
   setToken: (tok) => {
      authStates.token = tok;
   },
   setRole: (rol) => {
      authStates.role = rol;
   },
});

export default authStates;

export const storeToken = (token) => {
   localStorage.setItem('token', token);
};

export const storeRole = (role) => {
   localStorage.setItem('role', role);
};
