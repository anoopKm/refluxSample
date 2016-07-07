import React from 'react';
let _ = require('lodash'); 

let ShowInfo = React.createClass ({
    getLiData(){
      return _.map(this.props.routeInformation.areaInfo,(obj,index)=>{
          return(
              <div key={index}>
                <li key = {index} className='col-md-12'>
                  <div className='col-md-6'>{obj.stwId}</div>
                  <div className='col-md-6'>{obj.area}</div>
                </li>
              </div>
            );
      });
    },
    handleClose(){
      this.props.hideInfo();
    },
    createPopUp(){
      if(this.props.showInfo) {
        return(
            <div className="popup">
              <button className="cross" type="button" onClick={this.handleClose}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
              <div className="popup_head">
                <span>Employees Affinity Info</span>
              </div>
              <img className="closeButtn" src=""></img>
              <div className="popup_body">
                <li className='colHeader col-md-12'>
                  <div className='col-md-6'><span>Employees</span></div>
                  <div className='col-md-6'><span>Area</span></div>
                </li>
                {this.getLiData()}
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
            <div className='col-md-12 showInfo'>
               {this.createPopUp()}
            </div>
        );
    }
});

module.exports = ShowInfo;