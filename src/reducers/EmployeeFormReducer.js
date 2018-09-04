const INITIAL_STATE = {
  name: '',
  shift: '',
  phone:''
}

export default(state = INITIAL_STATE, action) => {


  switch (action.type) {
    case 'employee_update':
      return {
        ...state,
        [action.payload.prop] : action.payload.value
      }
    default:
      return state;
  }
}
