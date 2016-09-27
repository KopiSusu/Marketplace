/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'

import Icon from './../../common/icon'
import View from './components/view'
import Input from './components/input'

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
                        <Input toggle={this.props.toggle}/>
                        <View items={this.props.items} config={this.props.config} filter={this.props.filter} toggle={this.props.toggle}/>
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
        query: state.search.query,
        items: state.search[state.search.filter]
    }
}

export default connect(mapStateToProp, Actions)(Ribbon);
