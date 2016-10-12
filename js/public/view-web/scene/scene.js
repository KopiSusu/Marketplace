/* @flow */
import React from 'react'
import { browserHistory } from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import _ from 'lodash'
import * as  Actions from './../../actions'

import Ribbon from './core/ribbon/ribbon'
import Sections from './core/sections/sections'

import './core/global.styl'

class Scene extends React.Component {

	constructor(props) {
        super(props)
        this._constructPageJSON = this._constructPageJSON.bind(this)
        this._constructPageJSON = this._constructPageJSON.bind(this)
    }

    _constructPageJSON (pathname) {
        let pageParms;
        let path;
        switch (pathname) {
            case '/':
                browserHistory.push('/featured')
                break;
            case '/featured':
                this.props.initializePage('featured', '_INITIALIZE_PAGE')
                break;
            case '/products':
                this.props.initializePage('products', '_INITIALIZE_PAGE')
                break;
            case '/producers':
                this.props.initializePage('producers', '_INITIALIZE_PAGE')
                break;
            default:
                pageParms = pathname.split('/')[2]
                path = pathname.split('/')[1] === 'producers' ? 'profile' : 'product'
                this.props.initializePage(path, '_INITIALIZE_PAGE', pageParms)
                break;
        }
    }

    componentWillMount() {
        this._constructPageJSON(this.props.location.pathname)
   	}

    handleScroll(){
        var scroll = this.refs.scroll;
        this.props.updateScrollPosition(scroll.scrollTop);
    }

    componentWillReceiveProps (nextProps) {
    	if (nextProps.location.pathname !== this.props.location.pathname)
    		this._constructPageJSON(nextProps.location.pathname)
    }

  	render() {
		return (
			<section ref="scroll" onScroll={() => {this.handleScroll()}} className="scroll">
				<Ribbon scroll={this} app={this.props.app} />
				{this.props.sectionIndex ? <Sections/> : null}
    		</section>
		)
  	}
}

const mapStateToProp = (state) => {
    return {
        sectionIndex : state.sections.sectionIndex,
        listIndex : state.sections.listIndex
    }
}

export default connect(mapStateToProp, Actions)(Scene);
