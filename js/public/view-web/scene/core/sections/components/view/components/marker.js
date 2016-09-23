/* @flow */
import React from 'react'
import _ from 'lodash'

class Marker extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
        	<div className='Marker'>
	            <p className='blob column-2 center' style={this.props.style}>
	            	{this.props.displayName}
	            </p>
            </div>
        )
    }

}

export default Marker;
