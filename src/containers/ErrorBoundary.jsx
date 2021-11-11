import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  componentDidUpdate(prevProps){
    if(this.props.location.pathname !== prevProps.location.pathname){
      this.setState({error: null});
    }
  }

  componentDidCatch(error) {
    return this.setState({error});
  }

  renderFallBackUI() {
    // eslint-disable-next-line no-undef
    if(APP_ENV === 'LOCAL') {
      return this.state.error.stack;
    }
    return 'Something went wrong... We are fixing it on priority.';
  }

  render(){
    if(this.state.error) {
      return <h1>{this.renderFallBackUI()}</h1>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

export default withRouter(ErrorBoundary);
