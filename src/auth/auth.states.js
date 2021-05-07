import { observable } from 'mobx';

const authStates = observable({
   token: '',
   decoded: '',

   // token stored here to avoid frequent localstorage access
   setToken: (tok) => {
      authStates.token = tok;
   },
   setDecoded: (dec) => {
      authStates.decoded = dec;
   },
});

export default authStates;

export const storeToken = (token) => {
   localStorage.setItem('token', token);
   authStates.setToken(token);
};

export const storeDecoded = (decoded) => {
   localStorage.setItem('decoded', decoded);
   authStates.setDecoded(decoded);
};
