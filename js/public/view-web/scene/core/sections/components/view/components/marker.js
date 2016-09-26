/* @flow */
import React from 'react'
import _ from 'lodash'

class Marker extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {

        return (
        	<div className='marker' style={{backgroundImage: `url(${this.props.imageURL})`}}></div>
        )
    }

}

export default Marker;
