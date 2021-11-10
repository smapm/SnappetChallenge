const initialState = {
  dateList: [],
  studentsList: [],
  learningObjective: [],
  subject: [],
  domain: [],
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
      dateList: [...action.data.dateList],
      studentsList,
      learningObjective,
      subject,
      domain,
      networkError: false
    };
  }
  case 'NETWORK_ERRROR':
    return {
      ...state,
      networkError: true
    };
  default:
    return state;
  }
};

export default reducer;
