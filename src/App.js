// in src/App.js
import React from 'react';
import { fetchUtils, simpleRestClient, jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import authClient from './authClient';

import { AccountDatabasesList, AccountDatabaseCreate } from './account_databases';
import { AccountDatasetList, AccountDatasetCreate } from './account_datasets';
import Dashboard from './dashboard';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}
const restClient = simpleRestClient('http://localhost:3000', httpClient);

//restClient={jsonServerRestClient('http://localhost:8080')}>
const App = () => (
    <Admin authClient={authClient} dashboard={Dashboard} restClient={restClient} >
        <Resource name="account_databases" create={AccountDatabaseCreate} list={AccountDatabasesList} />
        <Resource name="account_datasets" create={AccountDatasetCreate} list={AccountDatasetList} />
    </Admin>
);

export default App;
