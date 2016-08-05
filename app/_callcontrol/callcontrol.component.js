import React, { Component } from 'react';
import styles from './callcontrol.style.css';
class CallControl extends Component {

  constructor(props, context) {
     super(props, context);
  }

  render() {
    return(
          <div className="pane">

                <div className={styles.callcontrolWrapper}>
                  Call Control Wrapper

                  <div id="phone">
                    <div id="wrapper">
                        <div className="key" rel="1">1</div>
                        <div className="key" rel="2">2<span>abc</span></div>
                        <div className="key" rel="3">3<span>def</span></div>
                        <div className="clear"></div>
                        <div className="key" rel="4">4<span>ghi</span></div>
                        <div className="key" rel="5">5<span>jkl</span></div>
                        <div className="key" rel="6">6<span>mno</span></div>
                        <div className="clear"></div>
                        <div className="key" rel="7">7<span>pqrs</span></div>
                        <div className="key" rel="8">8<span>tuv</span></div>
                        <div className="key" rel="9">9<span>wxyz</span></div>
                        <div className="clear"></div>
                        <div className="key special" rel="*">*</div>
                        <div className="key" rel="1">0<span>oper</span></div>
                        <div className="key special" rel="#">#</div>
                        <div className="clear"></div>
                        <div className="key nb"></div>
                        <div className="key phone" rel="Make Call"><i className="fa fa-phone"></i></div>
                        <div className="key nb"></div>
                        <div className="clear"></div>
                    </div>
                  </div>


                </div>

          </div>
     );
  }
}

export default CallControl;
