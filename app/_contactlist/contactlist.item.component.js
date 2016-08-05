import React, { Component, PropTypes } from 'react';

export default class ContactItem extends Component {

  static propTypes = {
    itemInfo : PropTypes.object.isRequired
  }
  render() {
    return (
      <li className="list-group-item" >
           <img className="img-circle media-object pull-left" src={this.props.itemInfo.userIcon} width="32" height="32" />
           <div className="media-body">
               <div className="infoActionWrapper">
                   <div>
                       <strong>{this.props.itemInfo.name}</strong>
                       <p>{this.props.itemInfo.phoneNumber}</p>
                   </div>
                   <div className="pull-right media-body-action">
                       <div className="btn-group">
                         <button className="btn btn-default">
                           <span className="icon icon-chat"></span>
                         </button>
                         <button className="btn btn-default">
                           <span className="icon icon-phone"></span>
                         </button>
                         <button className="btn btn-default">
                           <span className="icon icon-video"></span>
                         </button>
                       </div>
                   </div>
               </div>
           </div>
       </li>
    )
  }
}
