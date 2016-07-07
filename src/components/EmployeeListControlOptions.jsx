import React from 'react';  
import actions from '../actions/actions';

let EmployeeListControlOptions = React.createClass ({
    handleMapClick() {

    },
    handleMapClick() {
        actions.changeMapData();
    },
    toggleShow() {
        if(this.props.showOptions) {
            return {
                display: 'inline-block  '
            };
        }
        else {
            return {
                display: 'none'
            };
        }
    },
    getBtn() {
        return '';/*<button className="btn btn-primary">Sort<span className="glyphicon glyphicon-sort"></span></button>
                <button className="btn btn-primary">History</button>*/
    },
    render() {
        return (
            <div className='col-md-12 employeeListControlOptions'>
                <button className="btn btn-primary"><input type="checkbox" /></button>
                <span>0/32</span>
                <button className="btn btn-primary" style={this.toggleShow()}>Show on Map </button>
                <button className="btn btn-primary" style={this.toggleShow()}>Merge</button>
                <button className="btn btn-primary" style={this.toggleShow()}>Rearrange</button>
                <button className="btn btn-primary" style={this.toggleShow()}>Assign</button> 
                <button className="btn btn-primary" style={this.toggleShow()}>More<span className="glyphicon glyphicon-triangle-bottom"></span></button>
                {this.getBtn}
            </div>
        );
    }
});

module.exports = EmployeeListControlOptions;