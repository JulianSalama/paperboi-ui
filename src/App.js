// in src/App.js
import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { AccountDatabasesList, AccountDatabaseCreate } from './account_databases';
import { AccountDatasetList, AccountDatasetCreate } from './account_datasets';
import Dashboard from './dashboard';

const App = () => (
    <Admin dashboard={Dashboard} restClient={jsonServerRestClient('http://paperboi-dev.us-east-1.elasticbeanstalk.com')}>
        <Resource name="account_databases" create={AccountDatabaseCreate} list={AccountDatabasesList} />
        <Resource name="account_datasets" create={AccountDatasetCreate} list={AccountDatasetList} />
    </Admin>
);

export default App;
