import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import ContactListContainer from './_contactlist/contactlist.container';
import ScheduleMeetingContainer from './_schedulemeeting/schedulemeeting.container';
import CallControlContainer from './_callcontrol/callcontrol.container';
// import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ContactListContainer} />
    <Route path="/contactlist" component={ContactListContainer} />
    <Route path="/schedulemeeting" component={ScheduleMeetingContainer} />
    <Route path="/callcontrol" component={CallControlContainer} />
  </Route>
);
