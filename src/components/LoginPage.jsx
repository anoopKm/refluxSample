import React from 'react';
import actions from '../actions/actions.js';

let LoginPage = React.createClass ({
    handleClose() {
        this.props.hideLogin();
    },
    handleLogIn(e) {
        actions.handleLogIn({
            userName: this.refs.UserName.value,
            password: this.refs.Password.value
        });
    },
    createPopUp(){
      if(this.props.showLogin) {
        return(
            <div className="popup">
                <button className="cross" type="button" onClick={this.handleClose}>
                    <span className="glyphicon glyphicon-remove"></span>
                </button>
                <div className="popup_body">
                    <li><span>UserName</span><input type='text' ref='UserName'></input></li>
                    <li><span>Password</span><input type='password' ref='Password'></input></li>
                    <li><button className="btn btn-primary" onClick={this.handleLogIn}>submit</button></li>
                </div>
            </div>
          );
      }
      else {
        return '';
      }
    },
    render() {
        return (
            <div className='col-md-12 showLogin'>
               {this.createPopUp()}
            </div>
        );
    }
});

module.exports = LoginPage;