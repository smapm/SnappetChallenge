import { DateTime } from 'luxon';

export const retrieveStudentData = (utcTime) => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://run.mocky.io/v3/f6492c63-90e5-421c-98d2-5cd74cfb0684', {
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
      dispatch({ type: 'ADD_STUDENT_DATA', data: {dateList: [...new Set(dateList)], studentsList, learningObjective, subject, domain} });
    } catch (e) {
      console.log(e);
      dispatch({ type: 'NETWORK_ERRROR'});
    }
  };
};
