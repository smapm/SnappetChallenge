import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {retrieveStudentData} from '../../store/actions/actionCreator';
import BasicTable from '../common/Table';
import Dropdown from '../common/Dropdown';
import classes from '../../sass/pages/monitor.scss';
import PropTypes from 'prop-types';
class Monitor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '2015-03-24'
    };
  }

  componentDidMount() {
    this.props.retrieveStudentData(this.state.selectedDate);
  }

  setSelectedDate = (date) => {
    this.props.retrieveStudentData(date);
    this.setState({
      selectedDate: date
    });
  };

  render() {
    if(this.props.networkError){
      return <h1>Something went wrong... We are fixing it on priority.</h1>;
    }
    if(!this.props.dateList.length){
      return null;
    }
    return (
      <Fragment>
        <h2 className={classes.heading}>Teachers Dashboard</h2>
        <div className={classes.datepick}>
          <Dropdown
            list={this.props.dateList}
            selectedValue={this.state.selectedDate}
            onClickHandler={this.setSelectedDate}
            label='Dates'/>
        </div>       
        <div className={classes.monitor}>
          <BasicTable
            dataList={this.props.studentsList}
            headerName='Student ID' />
          <BasicTable
            dataList={this.props.learningObjective}
            headerName='Learning Objectives' />
          <BasicTable
            dataList={this.props.subject}
            headerName='Subjects' />
          <BasicTable
            dataList={this.props.domain}
            headerName='Domain' />
        </div>
      </Fragment>);
  }
}

const mapStateToProps = state => {
  return {
    dateList: state.dateList,
    studentsList: state.studentsList,
    learningObjective: state.learningObjective,
    subject: state.subject,
    domain: state.domain,
    networkError: state.networkError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveStudentData: (utctime) => dispatch(retrieveStudentData(utctime))
  };
};

Monitor.propTypes = {
  retrieveStudentData: PropTypes.func.isRequired,
  networkError: PropTypes.bool.isRequired,
  dateList: PropTypes.array.isRequired,
  studentsList: PropTypes.array.isRequired,
  learningObjective: PropTypes.array.isRequired,
  subject: PropTypes.array.isRequired,
  domain: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Monitor);
