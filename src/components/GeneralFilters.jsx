import React from 'react'; 
let _ = require('lodash'); 

let GeneralFilters = React.createClass ({
  getFilters(){
    let arr=['All', 'Guard Routes','Over-Cap' , 'Under-Cap' , 'Emp-removed','Emp-Added','Flagged','Unflagged','Assigned' , 'UnAssigned' , ' Modifed' , 'UnModified', 'Approved' , 'Unapproved' ];
    let ele = _.map(arr,(obj , index)=>{
      return (
        <div key={index}>
          <li key = {index}>{obj}</li>
        </div>
      );
    });
    return ele;
  },
  render() {
    return (
    <div>
      <div className='col-md-12 generalFiltersTxt'>
         General Filters
     </div>
     <div className='col-md-12 generalFilters'>
        {this.getFilters()}
     </div>
    </div>
  );
}
});

module.exports = GeneralFilters;