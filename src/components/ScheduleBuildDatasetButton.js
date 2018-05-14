import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import restClient from '../helpers/restClient';
import { UPDATE } from 'admin-on-rest';

class ScheduleBuildDatasetButton extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        const updatedRecord = { ...record, is_started: true };
        restClient(UPDATE, 'build_a_dataset', { id: record.id, data: updatedRecord })
          .then((response) => {
            showNotification('Replication has started');
            push('/build_a_dataset');
          })
          .catch((e) => {
            showNotification('Error: replication not approved', 'warning')
          });
    }

    render() {
        return <FlatButton label="Start the App" onClick={this.handleClick} />;
    }
}

ScheduleBuildDatasetButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(ScheduleBuildDatasetButton);
