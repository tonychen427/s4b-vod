import React, { Component , PropTypes} from 'react';
import ContactItem from './contactlist.item.component';

class ContactList extends Component {

  static propTypes   = {
      contactlist: PropTypes.object.isRequired,
      performSimpleSearch: PropTypes.func.isRequired
  }

  constructor(props, context) {
     super(props, context);
     this.state = { text: this.props.text || ''};
  }
  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.setState({ text: '' })
      this.props.performSimpleSearch(text);
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleBlur(e) {
    // if (!this.props.newTodo) {
    //   this.props.onSave(e.target.value)
    // }
  }

  render() {
    return(
      <div className="pane">
        <ul className="list-group">
             <li className="list-group-header">
                 <input className="form-control" type="text" placeholder="Search for someone"
                  autoFocus="true"
                  value={this.state.text}
                  onBlur={this.handleBlur.bind(this)}
                  onChange={this.handleChange.bind(this)}
                  onKeyDown={this.handleSubmit.bind(this)}
                 />
             </li>
            {
              this.props.contactlist.contacts.map(contact => {
                  return (<ContactItem key={contact.id} itemInfo={contact} />);
              })
            }
        </ul>
      </div>
    );
  }
}

export default ContactList;
