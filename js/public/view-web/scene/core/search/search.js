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
                        <Input toggle={this.props.toggle} setQuery={this.props.setQuery} query={this.props.query}/>
                        <View items={this.props.items} config={this.props.config} filter={this.props.filter} query={this.props.query} toggle={this.props.toggle}/>
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
        config: [state.search.config[state.sections.selectedSection]],
        active: state.search.active,
        filter: state.sections.selectedSection,
        query: state.search.query,
        items: state.sections[`content-${state.sections.selectedSection}`]
    }
}

export default connect(mapStateToProp, Actions)(Ribbon);
