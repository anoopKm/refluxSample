import React from 'react';  
import routeData from '../constants/constant.js';
import SearchBox from './SearchBox.jsx';
import EmployeeListControlOptions from './EmployeeListControlOptions.jsx';
import actions from '../actions/actions';
//import CostAndSatisfactionScore from './CostAndSatisfactionScore.jsx';<CostAndSatisfactionScore />

let ContentHeader = React.createClass ({
	 componentWillUpdate() {
        if(this.props.status) {
            //message.emptyFilter = 'Loading...';
        } else {
           // message.emptyFilter =
             //   (Object.keys(this.props.status).length === 0) ? 'Loading...' : 'No results found';
        }
    },
    componentDidUpdate() {
        //message.emptyFilter = 'Loading...';
    },
    
    render() {
        return (
            <div className='col-md-12'>
                <div className='col-md-9'>
                    <SearchBox />
                    <EmployeeListControlOptions
                        showOptions={this.props.showOptions}
                        toggleOptions={this.props.toggleOptions}
                        status={this.props.status}/>
                </div>
                <div className='col-md-3'>
                    <button className="btn btn-primary" onClick={this.props.showLogin}>Login</button>
                </div>
            </div>
        );
    }
});

module.exports = ContentHeader;