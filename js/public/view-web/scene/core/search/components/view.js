/* @flow */
import React from 'react'
import _ from 'lodash'

import Icon from './../../../common/icon'
import Filter from './filter'

class View extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='view rows-5-4'>
                <Filter filter={this.props.filter} query={this.props.query} items={this.props.items}/>
            </div>
        )
    }

}

export default View;
