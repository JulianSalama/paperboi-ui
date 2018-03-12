// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField, SimpleForm, Create, TextInput, LongTextInput } from 'admin-on-rest';

export const AccountDatabasesList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="hostname" />
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
