const initialState = {
  dataSet: [],
  dateList: [],
  studentsList: [],
  learningObjective: [],
  subject: [],
  domain: [],
  studentResult: [],
  networkError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_STUDENT_DATA': {
    const studentsList = Object.keys(action.data.studentsList);
    const learningObjective = Object.keys(action.data.learningObjective);
    const subject = Object.keys(action.data.subject);
    const domain = Object.keys(action.data.domain);
    return {
      dataSet: [...action.data.dataSet],
      dateList: [...action.data.dateList],
      studentsList,
      learningObjective,
      subject,
      domain,
      networkError: false,
      studentResult: []
    };
  }
  case 'NETWORK_ERRROR':
    return {
      ...state,
      networkError: true
    };
  case 'SHOW_RESULT': {
    const studentResult = [];
    for (let key in action.data.subject) {
      studentResult.push(action.data.subject[key]);
    }
    return {
      ...state,
      studentResult
    };
  }
  default:
    return state;
  }
};

export default reducer;
