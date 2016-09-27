/* @flow */
import React from 'react'
import _ from 'lodash'

import Icon from './../../../common/icon'

class View extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='inputs header rows-5-1'>
                <div className='input'>
                    <input className='column-6-5'/>
                    <div onClick={() => this.props.toggle('SEARCH', false)}>
                        <Icon className='column-6-1' icon='Cancel'/>
                    </div>
                </div>
            </div>
        )
    }

}

export default View;
