 import React from 'react';  

let MoreFilters = React.createClass ({
    getFilters(){
            let arr=['Select Route Group','Select Route Landmark' ];
            let ele = _.map(arr,(obj , index)=>{
                  return (
                        <li key = {index}>{obj}</li>
                        );
            });
            return ele;
      },
    render() {
        return (
            <div className='col-md-12'>
                <div className='col-md-12'>
                    More Filters
                 </div>
                <div className='col-md-12'>
                    {this.getFilters()}
                </div>
            </div>
           );
    }
});

module.exports = MoreFilters;