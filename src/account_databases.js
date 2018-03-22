// in src/posts.js
import React from 'react';
import { BooleanField, List, Datagrid, TextField, SimpleForm, Create, TextInput, LongTextInput } from 'admin-on-rest';
import StartReplicationButton from './StartReplicationButton';

export const AccountDatabasesList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="hostname" />
            <BooleanField source="is_replicated" />
            <StartReplicationButton />
        </Datagrid>
    </List>
);

export const AccountDatabaseCreate = (props) => (
    <Create title="Create a Database" {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="password"/>
            <LongTextInput source="hostname" />
        </SimpleForm>
    </Create>
);
