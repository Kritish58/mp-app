let token;
let decoded;

export const storeDecoded = (decoded) => {
   localStorage.setItem('decoded', JSON.stringify(decoded));
};

export const storeToken = (token) => {
   localStorage.setItem('token', token);
};

export const getDecoded = () => {
   if (decoded) return decoded;
   decoded = JSON.parse(localStorage.getItem('decoded'));
   return decoded;
};

export const getToken = () => {
   if (token) return token;
   token = localStorage.getItem('token');
   return token;
};

export const doesTokenExist = () => {
   if (localStorage.getItem('token') && localStorage.getItem('decoded')) return true;
   return false;
};

export const handleLogout = () => {
   localStorage.removeItem('token');
   localStorage.removeItem('decoded');
   return;
};
