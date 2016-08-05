import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import schedulemeetingComponent from './schedulemeeting.component';
import * as schedulemeetingActions from './schedulemeeting.actions';

function mapStateToProps(state) {
  return {
    schedulemeeting: state.schedulemeeting
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(schedulemeetingActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(schedulemeetingComponent);
