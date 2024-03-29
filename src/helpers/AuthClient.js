import { AUTH_LOGIN, AUTH_ERROR, AUTH_CHECK, AUTH_LOGOUT } from 'admin-on-rest';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        var a = { username, password };
        a['email'] = a['username'];
        delete a.username
        const request = new Request('http://localhost:8080/auth/sign_in', {
            method: 'POST',
            body: JSON.stringify(a),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => {
                localStorage.setItem('resources', response.headers.get('resources'));
                localStorage.setItem('account-id', response.headers.get('account-id'));
                localStorage.setItem('access-token', response.headers.get('access-token'));
                localStorage.setItem('uid', response.headers.get('uid'));
                localStorage.setItem('expiry', response.headers.get('expiry'));
                localStorage.setItem('client', response.headers.get('client'));
            });
    }

    if (type === AUTH_LOGOUT) {
      localStorage.removeItem('access-token');
      localStorage.removeItem('uid');
      localStorage.removeItem('expiry');
      localStorage.removeItem('client');
      return Promise.resolve();
    }

    if (type === AUTH_ERROR) {
      const status  = params.message.status;
      if (status === 401 || status === 403) {
        //localStorage.removeItem('uid');
        //localStorage.removeItem('access-token');
      }
      return Promise.resolve();
    }

    if (type === AUTH_CHECK) {
      return localStorage.getItem('access-token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unkown method');;
}
