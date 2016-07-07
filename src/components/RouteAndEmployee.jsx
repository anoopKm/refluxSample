import React from 'react';  
//import routeData from '../constants/constant.js';
import actions from '../actions/actions';
let PureRenderMixin = require('react-addons-pure-render-mixin');

let _ = require('lodash');

let RouteAndEmployee = React.createClass ({
  mixins: [PureRenderMixin],
  getInitialState() {
      return {
          employeeDetail : true,
          routeStatus: 'notViewed'
          };
  },
  getEmployeeInfo(employees, showEmpDetail) {
      if(showEmpDetail == undefined || showEmpDetail== true) {
      return _.map(employees , (empObj , index)=>{  
      let empName = empObj.name;
        let empAddress = empObj.pickupLoc.address;
        let dropLocation = empObj.dropLoc.address;
        let onBoardDistance = empObj.onBoardDistance;
        let extraDistance = empObj.extraDistance;
        let pickupTimeArr = empObj.pickupTime.split(" ")[1].split("/");
        let addr1 = (empObj.type==0)?empObj.pickupLoc.landmark:empObj.dropLoc.address;
        let addr2 = (empObj.type==0)?empObj.dropLoc.address:empObj.pickupLoc.landmark;
        let pickupTime  = pickupTimeArr[0]+":"+pickupTimeArr[1];
        let percentageExtraDistance = this.getExtra(onBoardDistance,extraDistance);
        
        return(
           <div className='employeeDetail' key={index}>
               <li className='col-md-12'>
                  <div className='col-md-2'>{empName}</div>  
                  <div className='col-md-3'>{empAddress}</div>  
                  <div className='col-md-3'>{addr1 +" -> "+ addr2}</div> 
                  <div className='col-md-1'>{onBoardDistance}</div>
                  <div className='col-md-1'>({extraDistance})</div>
                  <div className='col-md-1'>{pickupTime}</div>
                  <div className='col-md-1'>{percentageExtraDistance+"%"}</div>
                </li>
           </div>
        );
      });
    }
    else {
      return '';
    }
  },
  getExtra(onBoardDistance,extraDistance) {
    if(onBoardDistance!=0)
    return (100 - (extraDistance)/onBoardDistance);
    else 
      return 0;
  },
  handleSingleClick(e){
    e.stopPropagation();
    let routeId = e.target.parentElement.getAttribute('name');
    actions.hideEmployeeDetail(routeId, 'selected');
  },

  handleChange(e) {
      e.stopPropagation();
      if(e.target.checked) {
        this.props.toggleOptions(true);
      }
      else {
        this.props.toggleOptions(false);
      }
  },
  handleLastCheckbox(e) {
      e.stopPropagation();
      let routeId = e.target.parentElement.parentElement.getAttribute('name');
      if(e.target.checked) {
        actions.setRouteStatus(routeId,'reViewed');
      }
      else {
        actions.setRouteStatus(routeId,'notViewed');
      }
  },
  handleInfoClick(){
      this.props.showInfo();
  },
  getBackGroundColor(routeViewStatus) {
      if(routeViewStatus === undefined || routeViewStatus === 'notViewed') {
        return {
          backgroundColor: '#EEE'
        };
      }
      else if (routeViewStatus === 'reViewed') {
        return {
          backgroundColor: '#4CA64C'
        };
      }
      else if (routeViewStatus === 'selected') {
        return {
          backgroundColor: '#FFAE19'
        };
      }
  },
  handleFlagClick(e) {
      e.stopPropagation();
      let routeId = e.target.parentElement.parentElement.getAttribute('name');
      actions.changeFlagStatus(routeId);
  },
  getColorFlag(flagStatus) {
      if(flagStatus) {
        return {
          color : 'red'
        };
      }
      else {
        return {
          color: 'black'
        };
      }
  },
  getRoutWiseHeader(routeId,marshall,flagStatus){
    return (<div className='routwiseHeader' name={routeId} onClick={this.handleSingleClick} onDoubleClick={this.handleDoubleClick}>
              <li className='col-md-12' name={routeId}>
                <div className='col-md-2'><input type="checkbox" onChange={this.handleChange}/>
                  <span >Route: {routeId}</span>
                </div>
                <div className='col-md-1'><span className='glyphicon glyphicon-flag' style={this.getColorFlag(flagStatus)} onClick={this.handleFlagClick}></span></div>  
                <div className='col-md-1'>4(23)</div>
                <div className='col-md-1'><span className='glyphicon glyphicon-user'></span></div>  
                <div className='col-md-3'>99%</div> 
                <div className='col-md-1'><span className='glyphicon glyphicon-pushpin'></span></div>
                <div className='col-md-1'><span className='glyphicon glyphicon-info-sign' onClick={this.handleInfoClick}></span></div>
                <div className='col-md-1'><span className='glyphicon glyphicon-map-marker'></span></div>
                <div className='col-md-1'><input type="checkbox" onChange={this.handleLastCheckbox}></input></div>
              </li>           
          </div>);
  },

  getData() {
    return _.map(this.props.routeTripSheets.routeTripSheets, (obj , index)=>{
      let routeId  = obj.id;
      let marshall = obj.marshallRequired;
      let flagStatus = obj.flagStatus;
        return (
          <div className='col-md-12 routwiseData' style={this.getBackGroundColor(obj.routeViewStatus)} key = {index} >
              {this.getRoutWiseHeader(routeId,marshall,flagStatus)}  
              {this.getEmployeeInfo(obj.employeeList, obj.showChilds)}   
           </div> 
         );

    });
  },
    render() {
      return (
        <div className='col-md-12 row'>
          {this.getData()}
        </div>              
     );
    }
});

module.exports = RouteAndEmployee;