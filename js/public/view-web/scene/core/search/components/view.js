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
                <div className='nav rows-1 column-4-1'>
                    <nav className='rows-7-1'>
                        <div>
                            <p>Search for</p>
                        </div>
                    </nav>
                    {
                        _.map(this.props.config, (nav, index) => {
                            let length = ( 6/this.props.config.length );
                            const itemLength = this.props.items.length
                            return (
                                <div key={index} onClick={() => this.props.toggle('FILTER', nav.filter)} className={`tab rows-7-${length} ${this.props.filter === nav.filter ? 'selected' : ''}`}>
                                    <Icon className='column-6-1' icon={nav.icon}/>
                                    <p>{nav.title}</p>
                                    {this.props.filter === nav.filter ? <p>{itemLength} Items</p> : null}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default View;
