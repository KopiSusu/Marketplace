/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'
import _ from 'lodash'

import Section from './components/section'
import './sections.styl'

class Sections extends React.Component {
    constructor(props) {
        super(props)
    }

  	render() {        
    	return (
    		<section className='sections column-1'>
                {
                    _.map(this.props.sectionIndex, (section, index) => {
                        return (
                            <Section key={index} {...this.props[section]} content={this.props[`content-${section}`]} fetchData={this.props.fetchData}/>
                        )
                    })
                }
    		</section>
    	)
  	}

}

const mapStateToProp = (state) => {
    let newState = {}

    newState.sectionIndex = state.sections.sectionIndex

    _.forEach(state.sections.sectionIndex, (section) => {
        newState[section] = state.sections[section]
        newState[`content-${section}`] = state.sections[`content-${section}`]
    })

    return newState
}

export default connect(mapStateToProp, Actions)(Sections);
