/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import _ from 'lodash'
import * as  Actions from './../../actions'

import Search from './core/search/search'
import Ribbon from './core/ribbon/ribbon'
import Sections from './core/sections/sections'

import './core/global.styl'

class Scene extends React.Component {

	constructor(props) {
        super(props)
        this._constructPageJSON = this._constructPageJSON.bind(this)
    }

    _constructPageJSON (pathname) {
        let path = pathname
        let pageParms;

        if(path.indexOf('/') > -1) {
    	    path = pathname.split('/')[1]
            pageParms = pathname.split('/')[2]
        }

    	switch (path) {
			case '':
				this.props.initializePage('marketplace', '_INITIALIZE_PAGE')
                break;
			case 'p':
				this.props.initializePage('producer', '_INITIALIZE_PAGE', pageParms)
                break;
		}
    }

    componentWillMount() {
        this._constructPageJSON(this.props.location.pathname)
   	}

    componentWillReceiveProps (nextProps) {
    	if (nextProps.location.pathname !== this.props.location.pathname)
    		this._constructPageJSON(nextProps.location.pathname)
    }

  	render() {
		return (
			<section className="scroll">
				<Search />
				<Ribbon app={this.props.app} />
				{this.props.sectionIndex ? <Sections/> : null}
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
