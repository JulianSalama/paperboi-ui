// in src/AccountDatabases.js
import React from 'react';
import {  Avatar, ReferenceField, DateField, PersonIcon, BooleanField,EditButton, DisabledInput, List, Datagrid, TextField, SimpleForm, Create, TextInput, LongTextInput, Edit } from 'admin-on-rest';
import StartReplicationButton from './StartReplicationButton';
import { Card, CardText, CardStyle, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { CreateButton, RefreshButton } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import GetStartedButton from './components/GetStartedButton';

const cardActionStyle = {
    zIndex: 2,
    display: 'inline-block',
    float: 'right',
};

const cardStyle = {
    width: 300,
    minHeight: 200,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const ApplicationGrid = ({ ids, data, basePath }) => (
  <div style={{ margin: '1em' }}>
  {ids.map(id =>
          <Card key={id} style={cardStyle} >
              <CardHeader
                  title={<TextField record={data[id]} source="name" />}
              />
              <CardText>
                  <TextField record={data[id]} source="description" />
              </CardText>
              <CardActions style={cardActionStyle}>
                  <GetStartedButton id={id}/>
              </CardActions>
          </Card>
      )}
  </div>
);
ApplicationGrid.defaultProps = {
    data: {},
    ids: [],
};


export const ApplicationList = (props) => (
    <List title="All Applications" {...props}>
        <ApplicationGrid />
    </List>
);
