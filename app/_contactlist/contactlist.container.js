import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import contactlistComponent from './contactlist.main.component';
import * as contactlistActions from './contactlist.actions';

function mapStateToProps(state) {
  return {
    contactlist: state.contactlist
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(contactlistActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(contactlistComponent);
