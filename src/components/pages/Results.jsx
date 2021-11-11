import React, { Component } from 'react';
import {connect} from 'react-redux';
import BarChart from '../common/BarChart';
import Dropdown from '../common/Dropdown';
import {showStudentResults} from '../../store/actions/actionCreator';
import classes from '../../sass/pages/results.scss';
import PropTypes from 'prop-types';
class Results extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: ''
    };
  }

  setSelectedStudent = (studentID) => {
    this.setState({
      selectedStudent: studentID
    });
    this.props.showStudentResults(studentID);
  };

  render() {
    if(!this.props.studentsList.length){
      return <h1>Please select a date from Monitor Page</h1>;
    }
    return (
      <div className={classes.results}>
        <div className={classes.results__datepick}>
          <Dropdown 
            list={this.props.studentsList}
            selectedValue={this.state.selectedStudent}
            onClickHandler={this.setSelectedStudent}
            label='Student ID'/>
        </div>
        <div className={classes.results__chart}>
          <BarChart data={this.props.studentResult}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    studentsList: state.studentsList,
    studentResult: state.studentResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showStudentResults: (studentID) => dispatch(showStudentResults(studentID))
  };
};

Results.propTypes = {
  showStudentResults: PropTypes.func.isRequired,
  studentsList: PropTypes.array.isRequired,
  studentResult: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
