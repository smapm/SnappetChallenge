import {processStudentData, processStudentResult} from './helper';

describe('test action helpers', () => {
  const testData = [
    {
      'SubmittedAnswerId':69399358,
      'SubmitDateTime':'2015-03-24T11:29:48.983',
      'Correct':1,
      'Progress':0,
      'UserId':40283,
      'ExerciseId':392535,
      'Difficulty':'189.5354445',
      'Subject':'Spelling',
      'Domain':'Taalverzorging',
      'LearningObjective':'woorden eindigend op -d of -t'
    },
    {
      'SubmittedAnswerId':69399577,
      'SubmitDateTime':'2015-03-24T11:29:58.530',
      'Correct':1,
      'Progress':0,
      'UserId':40281,
      'ExerciseId':392536,
      'Difficulty':'211.9584245',
      'Subject':'Spelling',
      'Domain':'Taalverzorging',
      'LearningObjective':'woorden eindigend op -d of -t'
    },
    {
      'SubmittedAnswerId':69399737,
      'SubmitDateTime':'2015-03-24T11:30:05.130',
      'Correct':0,
      'Progress':-10,
      'UserId':40282,
      'ExerciseId':392537,
      'Difficulty':'294.5562315',
      'Subject':'Spelling',
      'Domain':'Taalverzorging',
      'LearningObjective':'woorden eindigend op -d of -t'
    }
  ];

  it('test processStudentData', () => {
    const { dateList, studentsList } = processStudentData('2015-03-24', testData);
    expect(dateList.length).toBe(2);
    expect(studentsList).toEqual({'40281': 40281,'40283': 40283});
  });

  it('test processStudentResult', () => {
    const result = processStudentResult(40281, testData);
    expect(result).toEqual({Spelling: {correct: 1, incorrect: 0, totalExercise: 1, subject: 'Spelling'}});
  });
});
