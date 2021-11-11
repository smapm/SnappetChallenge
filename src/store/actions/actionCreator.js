import { processStudentData, processStudentResult } from '../helpers/helper';

// This action creator will fetch the data and then process it.
// Results after 2015-03-24 11:30 are not considered
// it iterates over the response once and gets all the data required
// and dispatches to store
// thunk is used as middleware 

export const retrieveStudentData = (utcTime) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/smapm/SnappetChallenge/master/Data/work.json', {
        'method': 'GET',
      });
      const studentData = await response.json();
      const { dataSet, dateList, studentsList, learningObjective, subject, domain } = processStudentData(utcTime, studentData);
      dispatch({ type: 'ADD_STUDENT_DATA', data: {dateList: [...new Set(dateList)], studentsList, learningObjective, subject, domain, dataSet} });
    } catch (e) {
      dispatch({ type: 'NETWORK_ERRROR'});
    }
  };
};

//this action creator will be invoked when a student is selected in results page
// it works on the already available data in the redux store
// this data has only info related to the date which was selected
// this fuction gets the subject wise count of correct and incorrect answers and dispatched to store

export const showStudentResults = (studentID) => {
  return async (dispatch, getState) => {
    const { dataSet = [] } = getState();
    const subject = processStudentResult(studentID, dataSet);
    dispatch({ type: 'SHOW_RESULT', data: {subject}});     
  };
};
