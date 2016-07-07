import React from 'react';  
import ContentHeader from './ContentHeader.jsx';
import RouteAndEmployee from './RouteAndEmployee.jsx';
let _ = require('lodash');

let ActualContent = React.createClass ({
   	getInitialState() {
        return {showOptions : false};
    },
	toggleOptions(sh) {
		this.setState({showOptions: sh});
	},
   	render() {
       return (
           	<div className='col-md-12'> 
           		<ContentHeader
           			showOptions={this.state.showOptions}
           			toggleOptions={this.toggleOptions}
                handleLogIn={this.props.handleLogIn}
                showLogin = {this.props.showLogin}
           			status={this.props.routeTripSheets.status}/>
              <RouteAndEmployee 
              		showOptions={this.state.show}
           			  toggleOptions={this.toggleOptions}
           			  showInfo={this.props.showInfo}
              		routeTripSheets={this.props.routeTripSheets}/> 
           </div>
       );
   }
});

module.exports = ActualContent;