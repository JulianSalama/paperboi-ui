import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import restClient from '../helpers/restClient';
import { UPDATE } from 'admin-on-rest';


class StartReplicationButton extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        const updatedRecord = { ...record, is_replicated: true };
        restClient(UPDATE, 'account_databases', { id: record.id, data: updatedRecord })
          .then((response) => {
            showNotification('Replication has started');
            push('/account_databases');
          })
          .catch((e) => {
            showNotification('Error: replication not approved', 'warning')
          });
    }

    render() {
        return <FlatButton label="Replicate" onClick={this.handleClick} />;
    }
}

StartReplicationButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(StartReplicationButton);
