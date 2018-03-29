// in src/AccountDatabases.js
import React from 'react';
import { SelectField, ChipField,SingleFieldList, SelectArrayInput, SelectInput, ReferenceField, ReferenceInput, BooleanField,EditButton, DisabledInput, List, Datagrid, TextField, SimpleForm, Create, TextInput, LongTextInput, Edit } from 'admin-on-rest';

export const DatabaseEventsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="action"/>
            <TextField source="table" />
            <TextField source="from_value" />
            <TextField source="to_value" />
            <ReferenceField reference="account_databases" source="account_database_id" >
              <TextField source="hostname" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

const required = value => value ? undefined : 'Required';

export const DatabaseEventCreate = (props) => (
    <Create title="Create a Database Event" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description"/>
            <SelectArrayInput label="Action" source="action" choices={[
              { id: 'INSERT', name: 'INSERT' },
              { id: 'UPDATE', name: 'UPDATE' },
              { id: 'DELETE', name: 'DELETE' },
            ]} />
            <TextInput source="table" />
            <TextInput source="from_value" />
            <TextInput source="to_value" />
            <ReferenceInput reference="account_databases" source="account_database_id" allowEmpty >
              <SelectInput optionText="hostname" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

//<Edit title={<AccountDatabaseTitle />} {...props}>
export const DatabaseEventsEdit = (props) => (
    <Edit title="Edit Database" {...props}>
        <SimpleForm>
        <DisabledInput label="Id" source="id" />
        <TextInput source="name" />
        <TextInput source="description"/>
        <TextInput source="table" />
        <TextInput source="from_value" />
        <TextInput source="to_value" />
        <ReferenceInput reference="account_databases" source="account_database_id" allowEmpty >
          <SelectInput optionText="hostname" />
        </ReferenceInput>
        </SimpleForm>
    </Edit>
);
