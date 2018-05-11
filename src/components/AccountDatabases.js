// in src/AccountDatabases.js
import React from 'react';
import { BooleanField, EditButton, DisabledInput, List, Datagrid, TextField, SimpleForm, Create, TextInput, LongTextInput, Edit } from 'admin-on-rest';
import StartReplicationButton from './StartReplicationButton';

export const AccountDatabasesList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="hostname" />
            <TextField source="name" />
            <BooleanField source="is_dumped" />
            <BooleanField source="is_replicated" />
            <EditButton />
        </Datagrid>
    </List>
);

const required = value => value ? undefined : 'Required';

export const AccountDatabaseCreate = (props) => (
    <Create title="Create a Database" {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password"/>
            <TextInput source="name"/>
            <LongTextInput source="hostname" />
        </SimpleForm>
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
