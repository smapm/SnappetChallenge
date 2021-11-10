import React from 'react';
import Navbar from '../components/common/Navbar';
import classes from '../sass/layout/layout.scss';
import PropTypes from 'prop-types';

const Layout = ({children}) => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <div className={classes.layout__container}>{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
