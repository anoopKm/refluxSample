import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
require('../scss/common.scss');
import ActualContent from './ActualContent.jsx';
import LeftSideContent from './LeftSideContent.jsx';
import ShowInfo from './ShowInfo.jsx';
import LoginPage from './LoginPage.jsx';
import ShowMap from './ShowMap.jsx';
import routeData from '../constants/constant.js';
import RouteInformation from '../constants/RouteInformationSample.js';
import {store} from '../stores/store';
let PureRenderMixin = require('react-addons-pure-render-mixin');
let stateFromServer=routeData;

let Main = React.createClass ({
    mixins: [Reflux.connect(store,'store'),PureRenderMixin],
    getInitialState() {
        return {
                store : stateFromServer,
                showInfo: false,
                showLogin: false,
                routeInformation: RouteInformation};
    },
    test(){
        //console.log(typeof window);
        //console.log(this.state);
    },
    showInfo() {
        this.setState({showInfo: true});
    },
    hideInfo(){
        this.setState({showInfo: false});
    },
    showLogin() {
        this.setState({showLogin: true});
    },
    hideLogin(){
        this.setState({showLogin: false});
    },
    getParentClass() {
        if(this.state.showInfo ||this.state.showLogin){
            return 'col-md-12 overlayShow';
        }
        else {
            return 'col-md-12';
        }
    },
    render() {
        return (
            <div>
            <div className={this.getParentClass()}>
                <div className='col-md-2 leftSideContent'>
                	<LeftSideContent />{this.test()}
                </div>
                <div className='col-md-10 actualContent'>
                	<ActualContent 
                        routeTripSheets={this.state.store}
                        showInfo = {this.showInfo}
                        showLogin = {this.showLogin}/>
                	<ShowMap />
                </div>
            </div>
            <ShowInfo
                    showInfo={this.state.showInfo}
                    hideInfo={this.hideInfo}
                    routeInformation={this.state.routeInformation}/>
            <LoginPage
                    showLogin={this.state.showLogin}
                    hideLogin={this.hideLogin}
                    routeInformation={this.state.routeInformation}/>
            </div>
        );
    }
});

module.exports = Main;