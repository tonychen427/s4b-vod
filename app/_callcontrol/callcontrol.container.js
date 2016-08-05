import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import callcontrolComponent from './callcontrol.component';
import * as callcontrolActions from './callcontrol.actions';

function mapStateToProps(state) {
  return {
    callcontrol: state.callcontrol
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(callcontrolActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(callcontrolComponent);
