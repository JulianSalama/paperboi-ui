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

                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }

    if (type === AUTH_LOGOUT) {
      localStorage.removeItem('token');
      return Promise.resolve();
    }

    if (type === AUTH_ERROR) {
      const status  = params.message.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem('token');
        return Promise.reject();
      }
    }

    if (type === AUTH_CHECK) {
      return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    return Promise.resolve();
}
