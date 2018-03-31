// in src/Dashboard.js
import React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { ViewTitle } from 'admin-on-rest/lib/mui';


export default () => (
    <Card>
        <ViewTitle title="Dashboard" />
        <CardText>You currently have no databases, and no applications.</CardText>
    </Card>
);
