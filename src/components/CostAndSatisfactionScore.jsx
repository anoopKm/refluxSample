import React from 'react';  

let CostAndSatisfactionScore = React.createClass ({
    render() {
        return (
            <div className='col-md-12 costAndSatisfactionScore'>
                <div className='col-md-5'>
                    <span>256(+5) Cost Per Employe</span>
                </div>
                <div className='col-md-5'>
                    <span>80%(-2%) Satisfaction score</span>
                </div>
                <div className='col-md-2'>
                    refreshIcon
                </div>
            </div>
        );
    }
});

module.exports = CostAndSatisfactionScore;