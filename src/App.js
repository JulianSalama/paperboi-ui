// in src/App.js
import React from 'react';
import { fetchUtils, simpleRestClient, jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { AccountDatabasesList, AccountDatabaseCreate, AccountDatabaseEdit } from './components/AccountDatabases';
import { ApplicationList } from './components/Applications'
import restClient from './helpers/restClient';
import authClient from './helpers/AuthClient';
import customRoutes from './customRoutes';

const App = () => (
  <Admin customRoutes={customRoutes} title="Paperboi" authClient={authClient} restClient={restClient} >
      {localStorage.getItem('resources').split(',').map( resource => {
        if (resource === '1') {
          return <Resource name="account_databases" edit={AccountDatabaseEdit} create={AccountDatabaseCreate} list={AccountDatabasesList} />
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
