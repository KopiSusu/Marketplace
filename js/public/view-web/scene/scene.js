/* @flow */
import React from 'react'

import Search from './core/search/search'
import Ribbon from './core/ribbon/ribbon'
import Sections from './core/sections/sections'

import './core/global.styl'

class Scene extends React.Component {

  	render() {
		return (
			<section className="scroll">
				<Search />
				<Ribbon app={this.props.app} />
				<Sections />
    		</section>
		)
  	}

}

export default Scene;
