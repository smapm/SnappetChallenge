import { DateTime } from 'luxon';

// This action creator will fetch the data and then process it.
// Results after 2015-03-24 11:30 are not considered
// it iterates over the response once and gets all the data required
// and dispatches to store
// thunk is used as middleware 

export const retrieveStudentData = (utcTime) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://run.mocky.io/v3/d652edfd-e4d2-4d4a-9322-ccd3fcac85ae', {
        'method': 'GET',
      });
      const studentData = await response.json();
      let dataSet = [];
      let dateList = [];
      let studentsList = {};
      let learningObjective = {};
      let subject = {};
      let domain = {};
      for (let i in studentData) {
        let current = studentData[i];
        const slice = DateTime.fromISO('2015-03-24T11:30:00.000').diff(DateTime.fromISO(current.SubmitDateTime.trim()));
        const flag = slice.values.milliseconds >= 0;
        flag && dateList.push(current.SubmitDateTime.split('T')[0]);
        if (flag && current.SubmitDateTime.includes(utcTime)) {
          dataSet.push(current);
          studentsList[current.UserId] = current.UserId;
          learningObjective[current.LearningObjective] = current.LearningObjective;
          subject[current.Subject] = current.Subject;
          domain[current.Domain] = current.Domain;
        }
      }
      dispatch({ type: 'ADD_STUDENT_DATA', data: {dateList: [...new Set(dateList)], studentsList, learningObjective, subject, domain, dataSet} });
    } catch (e) {
      console.log(e);
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
    let subject = {};
    for(let i in dataSet) {
      let current = dataSet[i];
      const flag = current.UserId === +studentID;
      if( flag && [current.Subject] in subject) {
        let subjectCopy = Object.assign({}, subject[current.Subject]);
        subjectCopy.totalExercise = subjectCopy.totalExercise + 1;
        subjectCopy.correct = subjectCopy.correct + current.Correct;
        subjectCopy.incorrect = subjectCopy.totalExercise - subjectCopy.correct;
        subject[current.Subject] = subjectCopy;
      }
      else if (flag ) {
        subject[current.Subject] = {
          totalExercise: 1,
          correct: current.Correct,
          subject: current.Subject,
          incorrect: 0
        };
      }
    } 
    dispatch({ type: 'SHOW_RESULT', data: {subject}});     
  };
};
