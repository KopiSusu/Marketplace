/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../actions'

import Search from './core/search/search'
import Ribbon from './core/ribbon/ribbon'
import Sections from './core/sections/sections'

import Marketplace from "./sceneJson/marketplace.js"

import './core/global.styl'

class Scene extends React.Component {

	constructor(props) {
        super(props)
    }

    componentWillMount() {
       	switch (this.props.location.pathname) {
			case '/':
				this.props.initializePage(Marketplace, '_INITIALIZE_PAGE')
				return Marketplace
		}
    }

  	render() {
		return (
			<section className="scroll">
				<Search />
				<Ribbon app={this.props.app} />
				{this.props.sectionIndex.length > 0 ? <Sections/> : null}
    		</section>
		)
  	}

}

const mapStateToProp = (state) => {
    let newState = {}

    newState.sectionIndex = state.sections.sectionIndex
    newState.listIndex = state.sections.listIndex
    
    return newState
}

export default connect(mapStateToProp, Actions)(Scene);
