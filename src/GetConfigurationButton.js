import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import { GET_ONE } from 'admin-on-rest';
import { fetchUtils, simpleRestClient, jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

// TBD: refactor this shit UI
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    if ( url.includes('sign_in') ) {

    } else {
      const token = localStorage.getItem('access-token');
      const uid = localStorage.getItem('uid');
      const expiry = localStorage.getItem('expiry');
      const client = localStorage.getItem('client');

      options.headers.set('token-type', 'Bearer');
      options.headers.set('access-token', token);
      options.headers.set('uid', uid);
      options.headers.set('expiry', expiry);
      options.headers.set('client', client);
    }
    return fetchUtils.fetchJson(url, options).then(response => {

        //if (response.status >= 200 && response.status < 300) {
          if ( typeof response.headers.get('access-token') !== "undefined" && response.headers.get('access-token') !== "" ) {
            localStorage.setItem('access-token', response.headers.get('access-token'));
          }
          if ( typeof response.headers.get('uid') !== "undefined" ) {
            localStorage.setItem('uid', response.headers.get('uid'));
          }
          if ( typeof response.headers.get('expiry') !== "undefined" ) {
            localStorage.setItem('expiry', response.headers.get('expiry'));
          }
          if ( typeof response.headers.get('client') !== "undefined" ) {
            localStorage.setItem('client', response.headers.get('client'));
          }

          if ( typeof response.headers.get('account-id') !== "undefined" ) {
            localStorage.setItem('account-id', response.headers.get('account-id'));
          }
          if ( typeof response.headers.get('resources') !== "undefined" ) {
            localStorage.setItem('resources', response.headers.get('resources'));
          }

        
        return response;
    });
}

class GetConfigurationButton extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        httpClient('http://localhost:8080/account_databases/' + record.id + '/download_configs', {});
      }
    render() {
        return <FlatButton label="Replicate" onClick={this.handleClick} />;
    }
}

GetConfigurationButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(GetConfigurationButton);
