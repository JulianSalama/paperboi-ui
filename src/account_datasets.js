// in src/posts.js
import React from 'react';
import {ChipField,SingleFieldList,ReferenceArrayField, SelectArrayInput, ReferenceArrayInput, FormTab, List, Datagrid, TextField, TabbedForm, Create, TextInput, LongTextInput, DisabledInput } from 'admin-on-rest';

export const AccountDatasetList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <ReferenceArrayField label="Input Databases" reference="account_databases" source="account_database_ids">
                  <SingleFieldList>
                      <ChipField source="hostname" />
                  </SingleFieldList>
            </ReferenceArrayField>
        </Datagrid>
    </List>
);

export const AccountDatasetCreate = (props) => (
    <Create title="Create a Dataset" {...props}>
        <TabbedForm>
            <FormTab label="Step 1">
                <DisabledInput label="Id" source="id" />
                <TextInput source="name" />
                <TextInput source="description" />
            </FormTab>
            <FormTab label="Step 2">
              <ReferenceArrayInput label="Input Databases" source="account_database_ids" reference="account_databases" allowEmpty>
                <SelectArrayInput  optionText="username" />
              </ReferenceArrayInput>
            </FormTab>
        </TabbedForm>
    </Create>
);
