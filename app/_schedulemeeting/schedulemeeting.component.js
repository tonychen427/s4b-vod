import React, { Component } from 'react';
import DayPicker, { DateUtils } from "react-day-picker";

class ContactList extends Component {

  constructor(props, context) {
     super(props, context);
     this.state = { selectedDay: new Date()};
  }

  handleDayClick(e, day, { selected, disabled }) {
    if (disabled) {
      return;
    }
    if (selected) {
      this.setState({ selectedDay: null })
    } else {
      this.setState({ selectedDay: day });
    }
  }

  render() {
    return(
      <div className="pane">
       <div className="smWrapper">
          <div className="smAction active">
             <span className="fa-stack fa-lg">
             <i className="fa fa-circle fa-stack-2x icon-background2"></i>
             <i className="fa fa-users fa-stack-1x"></i>
             </span>
             <div>Meet Now</div>
          </div>
          <div className="smAction">
             <span className="fa-stack fa-lg">
             <i className="fa fa-circle fa-stack-2x icon-background2"></i>
             <i className="fa fa-edit fa-stack-1x"></i>
             </span>
             <div>Schedule</div>
          </div>
          <div className="smAction">
             <span className="fa-stack fa-lg">
             <i className="fa fa-circle fa-stack-2x icon-background2"></i>
             <i className="fa fa-user-plus fa-stack-1x"></i>
             </span>
             <div>Join</div>
          </div>
          <div className="smAction">
             <span className="fa-stack fa-lg">
             <i className="fa fa-circle fa-stack-2x icon-background2"></i>
             <i className="fa fa-archive fa-stack-1x"></i>
             </span>
             <div>History</div>
          </div>
       </div>
       <DayPicker initialMonth={ new Date() } onDayClick={ this.handleDayClick.bind(this) } />
       <ul className="list-group">
       <li className="list-group-item meetingList" >
            <span className="fa-stack fa-lg pull-left">
            <i className="fa fa-circle fa-stack-2x icon-background2"></i>
            <i className="fa fa-users fa-stack-1x"></i>
            </span>
            <div className="media-body">
                <div className="infoActionWrapper">
                    <div>
                        <strong>Weekly Status Meeting</strong>
                        <p>Monday 6/20/2016, 1pm - 4pm </p>
                    </div>
                    <div className="pull-right media-body-action">
                        <div className="btn-group">
                          <button className="btn btn-default">
                            <span className="icon icon-users"></span>
                          </button>
                          <button className="btn btn-default">
                            <span className="icon icon-cancel"></span>
                          </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>

        <li className="list-group-item meetingList" >
             <span className="fa-stack fa-lg pull-left">
             <i className="fa fa-circle fa-stack-2x icon-background2"></i>
             <i className="fa fa-users fa-stack-1x"></i>
             </span>
             <div className="media-body">
                 <div className="infoActionWrapper">
                     <div>
                         <strong>Weekly Status Meeting</strong>
                         <p>Monday 6/20/2016, 1pm - 4pm </p>
                     </div>
                     <div className="pull-right media-body-action">
                         <div className="btn-group">
                           <button className="btn btn-default">
                             <span className="icon icon-users"></span>
                           </button>
                           <button className="btn btn-default">
                             <span className="icon icon-cancel"></span>
                           </button>
                         </div>
                     </div>
                 </div>
             </div>
         </li>

       </ul>

      </div>


    );
  }
}

export default ContactList;
