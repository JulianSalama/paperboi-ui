// in src/App.js
import React from 'react';
import { fetchUtils, simpleRestClient, jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import authClient from './authClient';

import { AccountDatabasesList, AccountDatabaseCreate, AccountDatabaseEdit } from './account_databases';
import { AccountDatasetList, AccountDatasetCreate } from './account_datasets';
import { DatabaseEventsList, DatabaseEventCreate, DatabaseEventsEdit } from './DatabaseEvents';
import Dashboard from './dashboard';
import restClient from './RestClient';

const App = () => (
    <Admin authClient={authClient} dashboard={Dashboard} restClient={restClient} >
        <Resource name="account_databases" edit={AccountDatabaseEdit} create={AccountDatabaseCreate} list={AccountDatabasesList} />
        <Resource name="database_events" list={DatabaseEventsList} create={DatabaseEventCreate} edit={DatabaseEventsEdit} />
        <Resource name="account_datasets" create={AccountDatasetCreate} list={AccountDatasetList} />
    </Admin>
);

export default App;
