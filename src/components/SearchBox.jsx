import React from 'react';
let DropdownList = require('react-widgets/lib/DropdownList'); 
let message = {'emptyFilter': '', 'filterPlaceholder': 'Search Employee, Vendor, Routes, Landmarks'};

let SearchBox = React.createClass ({
    handleSearch() {},
    handleChangeSearchInput() {},
    render() {
    	let localitiesData=[1,2,3,4,5];
        return (
            <div className='col-md-12 searchBox'>
                <DropdownList
                	data={localitiesData}
					valueField='name'
                    textField='name'
                    messages={message}
                    onSearch={this.handleSearch}
                    onChange={this.handleChangeSearchInput}
                />
            </div>
        );
    }
});

module.exports = SearchBox;