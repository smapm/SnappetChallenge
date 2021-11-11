import { DateTime } from 'luxon';

export const processStudentData = (utcTime, studentData) => {
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
  return { dataSet, dateList, studentsList, learningObjective, subject, domain };
};

export const processStudentResult = (studentID, dataSet) => {
  let subject = {};
  for (let i in dataSet) {
    let current = dataSet[i];
    const flag = current.UserId === +studentID;
    if (flag && [current.Subject] in subject) {
      let subjectCopy = Object.assign({}, subject[current.Subject]);
      subjectCopy.totalExercise = subjectCopy.totalExercise + 1;
      subjectCopy.correct = subjectCopy.correct + current.Correct;
      subjectCopy.incorrect = subjectCopy.totalExercise - subjectCopy.correct;
      subject[current.Subject] = subjectCopy;
    }
    else if (flag) {
      subject[current.Subject] = {
        totalExercise: 1,
        correct: current.Correct,
        subject: current.Subject,
        incorrect: 0
      };
    }
  }
  return subject;
};
