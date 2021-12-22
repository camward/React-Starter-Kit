import { combineReducers } from 'redux';
import loader from './loader/reducers';
import tasksReducer from './tasks/reducers';

const rootReducer = combineReducers({
  loader,
  tasks: tasksReducer,
});

export default rootReducer;
