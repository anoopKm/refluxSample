import React from 'react';  
import GeneralFilters from './GeneralFilters.jsx';
import MoreFilters from './MoreFilters.jsx';

let LeftSideContent = React.createClass ({
    render() {
        return (
        <div>
        	<div className='row loginDate'>
            	<span>
                	 9-May-2016,
                </span>
	            <span>
    	        	17:30, Login
        	    </span>
	        </div>
    	    <div className='row fleet'>
                <span>
                     Fleet Mix
                </span>
                <span>
                    Change
                </span>
        	</div>
           	<div>
           		<GeneralFilters />
           	</div>
            <div>
           		<MoreFilters />
           	</div>
        </div>
        );
    }
});

module.exports = LeftSideContent;