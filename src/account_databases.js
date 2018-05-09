// in src/AccountDatabases.js
import React from 'react';
import { BooleanInput,TabbedForm, FormTab, BooleanField,EditButton, DisabledInput, List, Datagrid, TextField, SimpleForm, Create, TextInput, LongTextInput, Edit } from 'admin-on-rest';
import StartReplicationButton from './StartReplicationButton';
import GetConfigurationButton from './GetConfigurationButton';
import { Card, CardText, CardStyle, CardHeader, CardActions } from 'material-ui/Card';

export const AccountDatabasesList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="hostname" />
            <TextField source="name" />
            <BooleanField source="is_dumped" />
            <BooleanField source="is_replicated" />
            <GetConfigurationButton />
            <EditButton />
        </Datagrid>
    </List>
);

const required = value => value ? undefined : 'Required';

const cardStyle = {
    width: '100%',
    minHeight: 200,
    margin: '1em 0em 0em 0em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const pStyle = {
  fontSize: 13,
  color: '#D3D3D3'
}

export const AccountDatabaseCreate = (props) => (
    <Create title="Create a Database" {...props}>
      <TabbedForm>
          <FormTab label="Set up user, and configuration">
            <Card key='1' style={cardStyle} >
              <CardHeader title="Set up user"/>
              <CardText>
                Create a new user with
              </CardText>
            </Card>
            <Card key='2' style={cardStyle} >
              <CardHeader title="Set up user"/>
              <CardText>
                Setup binlog row format.
                Setup binlog retention to 24h
              </CardText>
            </Card>
          </FormTab>
          <FormTab label="Step 2: configure the script securely">
            <p style={pStyle}> Note: you will set up the password in a config file securely later </p>
            <TextInput source="username" />
            <TextInput source="name"/>
            <LongTextInput source="hostname" />
          </FormTab>
      </TabbedForm>
      </Create>
);
//<Edit title={<AccountDatabaseTitle />} {...props}>
export const AccountDatabaseEdit = (props) => (
    <Edit title="Edit Database" {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" validate={required} />
            <LongTextInput source="hostname" validate={required} />
            <TextInput source="username" validate={required} />
            <TextInput source="password" validate={required} />
        </SimpleForm>
    </Edit>
);
