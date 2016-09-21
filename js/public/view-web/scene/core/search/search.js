/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'

import Icon from './../../common/icon'

import './search.styl'

class Ribbon extends React.Component {
    render() {
        return (
        	<section className={'search ' + ( this.props.active ? 'open' : 'closed') }>
                {
                    this.renderSearch()
                }
        	</section>
        );
    }

    renderSearch() {
        switch (this.props.active) {
            case true:
                return (
                    <span>
                        <div className='inputs header rows-5-1'>
                            <div className='input'>
                                <input className='column-6-5'/>
                                <div onClick={() => this.props.toggle('SEARCH', false)}>
                                    <Icon className='column-6-1' icon='Cancel'/>
                                </div>
                            </div>
                        </div>
                        <div className='view rows-5-4'>
                            <div className='filter rows-1 column-4-3'></div>
                            <div className='nav rows-1 column-4-1'>
                                <nav className='rows-7-1'>
                                    <div>
                                        <p>Search for</p>
                                    </div>
                                </nav>
                                {
                                    _.map(this.props.config, (nav, index) => {
                                        let length = ( 6/this.props.config.length );
                                        return (
                                            <div key={index} onClick={() => this.props.toggle('FILTER', nav.filter)} className={`tab rows-7-${length} ${this.props.filter === nav.filter ? 'selected' : ''}`}>
                                                <Icon className='column-6-1' icon={nav.icon}/>
                                                <p>{nav.title}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </span>
                )
            default:
                return (
                    <span onClick={() => this.props.toggle('SEARCH', true)}>
                        <p>Search</p>
                        <Icon icon='Search'/>
                    </span>
                )
        }
    }
}

const mapStateToProp = (state) => {
    return {
        config: state.search.config,
        active: state.search.active,
        filter: state.search.filter,
        query: state.search.query
    }
}

export default connect(mapStateToProp, Actions)(Ribbon);
