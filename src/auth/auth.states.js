import { observable } from 'mobx';

const authStates = observable({
   token: '',
   setToken: (tok) => {
      authStates.token = tok;
   },
});

export default authStates;
