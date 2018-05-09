// in src/posts.js
import React from 'react';
import {Edit, EditButton, ReferenceInput, SelectInput,ChipField,SingleFieldList,ReferenceField, SelectArrayInput, ReferenceArrayInput, FormTab, List, Datagrid, TextField, TabbedForm, Create, TextInput, LongTextInput, DisabledInput } from 'admin-on-rest';

export const PaperboiToMysqlAppsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceField reference="account_databases" source="input_database_id" >
              <TextField source="hostname" />
            </ReferenceField>
            <ReferenceField reference="account_databases" source="output_database_id" >
              <TextField source="hostname" />
            </ReferenceField>
            <TextField source="configuration" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const PaperboiToMysqlAppsCreate = (props) => (
    <Create title="Configure the replication" {...props}>
        <TabbedForm>
            <FormTab label="Step 1: Choose your input database">
                <ReferenceInput label="Input Databases" source="input_database_id" reference="account_databases" allowEmpty>
                  <SelectInput options="hostname" />
                </ReferenceInput>
            </FormTab>
            <FormTab label="Step 2: Choose your output database">
              <ReferenceInput label="Output Databases" source="output_database_id" reference="account_databases" allowEmpty>
                <SelectInput options="hostname" />
              </ReferenceInput>
            </FormTab>
            <FormTab label="Step 3: Choose tables to replicate">
            <LongTextInput label="Tables separated by a comma" source="configuration" />
            </FormTab>
        </TabbedForm>
    </Create>
);
export const PaperboiToMysqlAppsEdit = (props) => (
    <Edit title="Configure the replication" {...props}>
        <TabbedForm>
            <FormTab label="Step 1: Choose your input database">
                <ReferenceInput label="Input Databases" source="input_database_id" reference="account_databases" allowEmpty>
                  <SelectInput options="hostname" />
                </ReferenceInput>
            </FormTab>
            <FormTab label="Step 2: Choose your output database">
              <ReferenceInput label="Output Databases" source="output_database_id" reference="account_databases" allowEmpty>
                <SelectInput options="hostname" />
              </ReferenceInput>
            </FormTab>
            <FormTab label="Step 3: Choose tables to replicate">
            <LongTextInput label="Tables separated by a comma" source="configuration" />
            </FormTab>
        </TabbedForm>
    </Edit>
);
