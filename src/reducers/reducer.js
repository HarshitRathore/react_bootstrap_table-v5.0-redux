import { test1, test2, test3, test4 } from '../components/fakeData';

const initialState = {
    data_array: [test1, test2, test3, test4],
    choose: false,
    openToday: true,
    openYesterday: true,
    themes : ['table-primary', 'table-success', 'table-danger', 'table-info', 'tab;e-warning']
  };
  
  function addReducer(state = initialState, action) {
    switch(action.type) {
      case 'TOGGLE_OPEN_INCIDENT':
        return { ...state, choose: false };
      case 'TOGGLE_CLOSED_INCIDENT':
        return { ...state, choose: true };
      case 'TOGGLE_OPENTODAY':
        return { ...state, openToday: !state.openToday };
      case 'TOGGLE_OPENYESTERDAY':
        return { ...state, openYesterday: !state.openYesterday };
      default:
        return state;
    }
  }
  
  export default addReducer;
  