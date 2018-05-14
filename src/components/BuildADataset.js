// in src/Datasets.js
import React from 'react';
import { BooleanField, EditButton, DisabledInput, List, Datagrid, TextField, SimpleForm, Create, TextInput, LongTextInput, Edit } from 'admin-on-rest';
import ScheduleBuildDatasetButton from './ScheduleBuildDatasetButton'

export const BuildADatasetAppsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="bucket_name" />
            <BooleanField source="is_started" />
            <ScheduleBuildDatasetButton />
            <EditButton />
        </Datagrid>
    </List>
);

const required = value => value ? undefined : 'Required';

export const BuildADatasetAppsCreate = (props) => (
    <Create title="Create a Database" {...props}>
        <SimpleForm>
            <LongTextInput source="bucket_name" />
        </SimpleForm>
    </Create>
);

export const BuildADatasetAppsEdit = (props) => (
    <Edit title="Edit Database" {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="bucket_name" validate={required} />
        </SimpleForm>
    </Edit>
);
