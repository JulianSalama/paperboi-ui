// in src/comments/ApproveButton.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';
import {CREATE} from 'admin-on-rest';
import restClient from '../helpers/restClient';


class GetStartedButton extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.id,
      };
  }

  handleClick = () => {
      debugger
      const { push, record, showNotification } = this.props;
      restClient(CREATE, `account_applications`, { data: { 'app-id': this.props.id, 'account-id': localStorage.getItem("account-id") } })
          .then((response) => {
              debugger
              window.location.href = 'http://localhost:3000/#/' + response.app;
              showNotification('Successfully added application to your datasets approved');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: comment not approved', 'warning')
            });
    }

    render() {
        return <FlatButton primary label="Get Started" onClick={this.handleClick} />;
    }
}

GetStartedButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(GetStartedButton);
