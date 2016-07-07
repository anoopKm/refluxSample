let request = require('superagent');
import routeData from '../constants/constant.js';
let Reflux = require('reflux');
let actions = require('../actions/actions.js');
let _ = require('lodash');
let React = require('react');
let update = require('react-addons-update');
let applicationState = routeData;
let url='https://preprod.moveinsync.com/Test2/';
let username= 'mistm@moveinsync.com';
let password= 'Moveinsync1';

function fetchLoginInfo(err,res) {
    console.log(res);
}

let store = Reflux.createStore({
    listenables: [actions],
    state: applicationState,
    onHideEmployeeDetail(targetRoutId, val) {
        let temp={};
        temp = _.map(this.state.routeTripSheets,(obj,index)=>{
            if(obj.id == targetRoutId){
                obj.showChilds = (obj.showChilds) ? false:true;
                obj.routeViewStatus = val;
            }
            else if(obj.routeViewStatus == val){
                obj.routeViewStatus = 'notViewed';
            }
            return obj;
        });
        this.state = update(this.state, {
            routeTripSheets: {$merge: temp}
        });
        this.trigger(this.state);
    },
    onSetRouteStatus(targetRoutId, val) {
        let temp={};
        temp = _.map(this.state.routeTripSheets,(obj,index)=>{
            if(obj.id == targetRoutId){
                obj.routeViewStatus = val;
            }
            return obj;
        });
        this.state = update(this.state, {
            routeTripSheets: {$merge: temp}
        });
        this.trigger(this.state);
    },
    onChangeFlagStatus(targetRoutId) {
        let temp={};
        temp = _.map(this.state.routeTripSheets,(obj,index)=>{
            if(obj.id == targetRoutId){
                obj.flagStatus = (obj.flagStatus) ? false:true;
            }
            return obj;
        });
        this.state = update(this.state, {
            routeTripSheets: {$merge: temp}
        });
        this.trigger(this.state);
    },
    onHandleLogIn(userDetails){
        let logInApiUrl = 'http://localhost:8080/RouteEditor/';
        let reqObj=userDetails;
        let logInRequest = request
            .post(logInApiUrl)
            .query(reqObj)
            .end((err, res) =>
                fetchLoginInfo(err, res)
        );
    },
    init() {
        // initialize
        //callLogInFunction();
    }
});

module.exports = {
    store: store
};
