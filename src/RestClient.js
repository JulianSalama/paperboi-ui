import { fetchUtils, simpleRestClient, jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    if ( url.includes('sign_in') ) {

    } else {
      const token = localStorage.getItem('access-token');
      const uid = localStorage.getItem('uid');
      const expiry = localStorage.getItem('expiry');
      const client = localStorage.getItem('client');

      options.headers.set('token-type', 'Bearer');
      options.headers.set('access-token', token);
      options.headers.set('uid', uid);
      options.headers.set('expiry', expiry);
      options.headers.set('client', client);
    }

    return fetchUtils.fetchJson(url, options).then(response => {
        //if (response.status >= 200 && response.status < 300) {
          if ( typeof response.headers.get('access-token') !== "undefined" && response.headers.get('access-token') != "" ) {
            localStorage.setItem('access-token', response.headers.get('access-token'));
          }
          if ( typeof response.headers.get('uid') !== "undefined" ) {
            localStorage.setItem('uid', response.headers.get('uid'));
          }
          if ( typeof response.headers.get('expiry') !== "undefined" ) {
            localStorage.setItem('expiry', response.headers.get('expiry'));
          }
          if ( typeof response.headers.get('client') !== "undefined" ) {
            localStorage.setItem('client', response.headers.get('client'));
          }
        //}
        return response;
    });
}
const restClient = simpleRestClient('http://localhost:8080', httpClient);

export default restClient;
