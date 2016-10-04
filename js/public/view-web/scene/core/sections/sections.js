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
                        let content = this.props[`content-${section}`]

                        if (this.props[section]['useData']) {
                            if ( this.props[section].type.indexOf('mixed') > -1 ) {
                                content = _.concat(content, this.props[`content-${this.props[section]['useData']}`])
                            } else {
                                content = this.props[`content-${this.props[section]['useData']}`]
                            }
                        }

                        if (
                            this.props[section].noNavigation ||
                            this.props.selectedSection === section ||
                            this.props[section].type.indexOf('contentOnly') > -1
                        ) {
                            return (
                                <Section 
                                key={index} s
                                selectedSection={this.props.selectedSection} 
                                {...this.props[section]} 
                                listIndex={this.props.listIndex} 
                                content={content} 
                                selectItem={this.props.selectItem} 
                                fetchData={this.props.fetchData}/
                            >)
                        }
                    })
                }
    		</section>
    	)
  	}
}

const mapStateToProp = (state) => {
    let newState = {}

    newState.sectionIndex = state.sections.sectionIndex
    newState.listIndex = state.sections.listIndex
    newState.selectedSection = state.sections.selectedSection

    _.forEach(state.sections.sectionIndex, (section) => {
        newState[section] = state.sections[section]
        if(state.sections[section].type.indexOf('contentOnly') < 0)
            newState[`content-${section}`] = state.sections[`content-${section}`]
    })
    
    return newState
}

export default connect(mapStateToProp, Actions)(Sections);
