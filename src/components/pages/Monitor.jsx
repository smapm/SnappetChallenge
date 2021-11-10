import React, { Component, Fragment } from 'react';
import { uniqBy, filter } from 'lodash';
import { DateTime } from 'luxon';
import BasicTable from '../common/Table';
import dataJson from '../../work.json';
import Dropdown from '../common/Dropdown';
import classes from '../../sass/pages/monitor.scss';
class Monitor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      studentsList: [],
      learningObjective: [],
      subject: [],
      domain: [],
      dates: [],
      selectedDate: '2015-03-24'
    };
  }

  componentDidMount() {
    let dateList = [];
    const dataset = filter(dataJson, function (o) {
      const slice = DateTime.fromISO('2015-03-24T11:30:00.000').diff(DateTime.fromISO(o.SubmitDateTime.trim()));
      const flag = slice.values.milliseconds >= 0;
      flag && dateList.push(o.SubmitDateTime.split('T')[0]);
      if (flag && o.SubmitDateTime.includes('2015-03-24')) {
        return true;
      }
      return false;
    });
    const studentsList = this.extractDataHelper(uniqBy(dataset, 'UserId'), 'UserId');
    const learningObjective = this.extractDataHelper(uniqBy(dataset, 'LearningObjective'), 'LearningObjective');
    const subject = this.extractDataHelper(uniqBy(dataset, 'Subject'), 'Subject');
    const domain = this.extractDataHelper(uniqBy(dataset, 'Domain'), 'Domain');
    //const exerciseId = this.extractDataHelper(uniqBy(dataset, 'ExerciseId'), 'ExerciseId');
    const dates = [...new Set(dateList)];
    this.setState({
      studentsList,
      learningObjective,
      subject,
      domain,
      dateList: dates
    });
  }

  extractDataHelper(data, propertyName) {
    let output = [];
    for (let i in data) {
      output.push(data[i][propertyName]);
    }
    return output;
  }

  setSelectedDate = (date) => {
    const dataset = filter(dataJson, function (o) {
      const slice = DateTime.fromISO('2015-03-24T11:30:00.000').diff(DateTime.fromISO(o.SubmitDateTime.trim()));
      const flag = slice.values.milliseconds >= 0;
      if (flag && o.SubmitDateTime.includes(date)) {
        return true;
      }
      return false;
    });
    const studentsList = this.extractDataHelper(uniqBy(dataset, 'UserId'), 'UserId');
    const learningObjective = this.extractDataHelper(uniqBy(dataset, 'LearningObjective'), 'LearningObjective');
    const subject = this.extractDataHelper(uniqBy(dataset, 'Subject'), 'Subject');
    const domain = this.extractDataHelper(uniqBy(dataset, 'Domain'), 'Domain');
    //const exerciseId = this.extractDataHelper(uniqBy(dataset, 'ExerciseId'), 'ExerciseId');
    this.setState({
      studentsList,
      learningObjective,
      subject,
      domain,
      selectedDate: date
    });
  };

  render() {
    return (
      <Fragment>
        <h2 className={classes.heading}>Teachers Dashboard</h2>
        <div className={classes.datepick}>
          <Dropdown
            dates={this.state.dateList}
            selectedDate={this.state.selectedDate}
            setSelectedDate={this.setSelectedDate}/>
        </div>       
        <div className={classes.monitor}>
          <BasicTable
            dataList={this.state.studentsList}
            headerName='Student ID' />
          <BasicTable
            dataList={this.state.learningObjective}
            headerName='Learning Objectives' />
          <BasicTable
            dataList={this.state.subject}
            headerName='Subjects' />
          <BasicTable
            dataList={this.state.domain}
            headerName='Domain' />
        </div>
      </Fragment>);
  }
}

export default Monitor;
