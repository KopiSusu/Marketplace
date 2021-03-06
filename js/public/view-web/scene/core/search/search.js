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
    constructor(props) {
        super(props)
        this._filterItems = this._filterItems.bind(this)
    }

    _filterItems () {
        return _.filter(this.props.items, (item) => {
            switch (this.props.filter) {
                case 'products':
                    item = item.toJSON()
                    return item.name.toLowerCase().indexOf(this.props.query) > -1 ||
                        item.ingredients.toLowerCase().replace(/[^\w\s]/gi, '').indexOf(this.props.query) > -1
                case 'producers':
                    item = item.toJSON()
                    return item.displayName.toLowerCase().replace(/[^\w\s]/gi, '').indexOf(this.props.query) > -1 ||
                        item.city.toLowerCase().replace(/[^\w\s]/gi, '').indexOf(this.props.query) > -1 ||
                        item.state.toLowerCase().replace(/[^\w\s]/gi, '').indexOf(this.props.query) > -1
            }
        })
    }

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
                        <View items={this._filterItems()} config={this.props.config} filter={this.props.filter} query={this.props.query} toggle={this.props.toggle}/>
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
    const selectedSection = state.sections.selectedSection ? state.sections.selectedSection : 'products'      
    return {
        config: [state.search.config[selectedSection]],
        active: state.search.active,
        filter: selectedSection,
        query: state.search.query,
        items: state.sections[`content-${selectedSection}`]
    }
}

export default connect(mapStateToProp, Actions)(Ribbon);
