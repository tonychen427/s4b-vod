import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import contactlist from '../_contactlist/contactlist.reducer';
import schedulemeeting from '../_schedulemeeting/schedulemeeting.reducer';
const rootReducer = combineReducers({
  routing,
  contactlist,
  schedulemeeting
});

export default rootReducer;
