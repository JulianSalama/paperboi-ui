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
        debugger
        if (resource === 'account_databases') {
          return <Resource name="account_databases" edit={AccountDatabaseEdit} create={AccountDatabaseCreate} list={AccountDatabasesList} />
        } else if (resource === 'paperboi_applications') {
          return <Resource name="paperboi_applications" list={ApplicationList} />
        } else if (resource === 'paperboi_to_mysql') {
          return <Resource name="paperboi_to_mysql" list={ApplicationList} />
        } else if (resource === "Build_a_Dataset_on_S3") {
          return <Resource name="Build A Dataset" list={ApplicationList} />
        }
      }
      ) }
  </Admin>
);

export default App;
