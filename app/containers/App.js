import React, { Component, PropTypes } from 'react';
import { Link , Navigation} from 'react-router';
import Dropdown , { DropdownTrigger , DropdownContent } from 'react-simple-dropdown';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <header className="toolbar toolbar-header">
        <h1 className="title">Virtual Office Desktop - S4B</h1>
        <div className="toolbar-actions">
          <div className="btn-group">
            <Link className="btn btn-default" activeClassName="active" to="/contactlist">
              <span className="icon icon-vcard"></span>
            </Link>

            <Link className="btn btn-default" activeClassName="active" to="/schedulemeeting">
              <span className="icon icon-calendar"></span>
            </Link>

            <Link className="btn btn-default" activeClassName="active" to="/callcontrol">
              <span className="icon icon-phone"></span>
            </Link>

            <button className="btn btn-default">
              <span className="icon icon-print"></span>
            </button>
            <button className="btn btn-default">
              <span className="icon icon-chat"></span>
            </button>
          </div>


          <Dropdown className="pull-right">
               <DropdownTrigger>
                 <button className="btn btn-default btn-dropdown">
                   <span className="icon icon-cog"></span>
                 </button>
               </DropdownTrigger>
               <DropdownContent>

                 <div className="arrow_box">
                     <ul className="list-group">
                          <li className="list-group-header">
                               Call using
                          </li>
                          <li className="list-group-item">
                              <div className="infoActionWrapper">
                                <div><span className="icon icon-monitor"></span></div>
                                <div className="infoAction">Computer</div>
                              </div>
                          </li>
                          <li className="list-group-item">
                              <div className="infoActionWrapper">
                                <div><span className="icon icon-phone"></span></div>
                                <div className="infoAction">Deskphone</div>
                              </div>
                          </li>
                          <li className="list-group-item">
                              <div className="infoActionWrapper">
                                <div><span className="icon icon-mic"></span></div>
                                <div className="infoAction">Audio Settings</div>
                              </div>
                          </li>
                          <li className="list-group-item">
                              <div className="infoActionWrapper">
                                <div><span className="icon icon-tools"></span></div>
                                <div className="infoAction">Service Settings</div>
                              </div>
                          </li>
                          <li className="list-group-item">
                              <div className="infoActionWrapper">
                                <div><span className="icon icon-logout"></span></div>
                                <div className="infoAction">Logout</div>
                              </div>
                          </li>
                     </ul>
                  </div>
               </DropdownContent>
           </Dropdown>

        </div>
        </header>
        <div className="window-content">
            {this.props.children}
        </div>
        <footer className="toolbar toolbar-footer">
          <div className="footer-link">
            Powered by <a href="http://www.8x8.com">8x8 Inc.</a>
          </div>
          <div className="toolbar-actions pull-right">
            <div className="btn-group">
            <button className="btn btn-default js-refresh-action">
              <span className="icon icon-mic js-refresh-action" title="Micphone"></span>
            </button>
            <button className="btn btn-default js-refresh-action">
              <span className="icon icon-sound js-refresh-action" title="volume"></span>
            </button>
              <button className="btn btn-default js-refresh-action">
                <span className="icon icon-arrows-ccw js-refresh-action" title="Refresh"></span>
              </button>
              <button className="btn btn-default js-quit-action">
                <span className="icon icon-logout js-quit-action" title="Quit"></span>
              </button>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
