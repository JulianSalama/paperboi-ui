// in src/App.js
import React from 'react';
import { fetchUtils, simpleRestClient, jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import authClient from './authClient';

import { AccountDatabasesList, AccountDatabaseCreate, AccountDatabaseEdit } from './account_databases';
import { AccountDatasetList, AccountDatasetCreate } from './account_datasets';
import { DatabaseEventsList, DatabaseEventCreate, DatabaseEventsEdit } from './DatabaseEvents';
import Dashboard from './dashboard';
import restClient from './RestClient';
import { ApplicationList } from './Applications'
import customRoutes from './customRoutes';
import { GET_MANY } from 'admin-on-rest';


const App = () => (
  <Admin customRoutes={customRoutes} title="Paperboi" authClient={authClient} dashboard={Dashboard} restClient={restClient} >
      {localStorage.getItem('resources').split(',').map( resource => {
        if (resource === '1') {
          return <Resource name="account_databases" edit={AccountDatabaseEdit} create={AccountDatabaseCreate} list={AccountDatabasesList} />
        } else if (resource === '2') {
          return <Resource name="database_events" list={DatabaseEventsList} create={DatabaseEventCreate} edit={DatabaseEventsEdit} />
        } else if (resource === '3') {
          return <Resource name="paperboi_applications" list={ApplicationList} />
        } else if (resource === '5') {
          return <Resource name="paperboi_to_mysql" list={ApplicationList} />
        }
      }
      ) }
  </Admin>
);

export default App;
