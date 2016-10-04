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
        const page = this.props.location.pathname.indexOf('/p/') > -1 ? 'Profile' : 'Marketplace'

    	return (
    		<section className={`sections column-1 ${page}`}>
                {
                    _.map(this.props.sectionIndex, (section, index) => {
                        let content = this.props[`content-${section}`]

                        if (this.props[section]['useData']) {
                            if (this.props[section].hardData) {
                                content = this.props[section].hardData
                            } else if ( this.props[section].type.indexOf('mixed') > -1 ) {
                                content = _.concat(content, this.props[`content-${this.props[section]['useData']}`])
                            } else {
                                content = this.props[`content-${this.props[section]['useData']}`]
                            }
                        }

                        if (this.props[section].type.indexOf('capture email') > -1)
                            content = this.props.emailCaptured

                        if (
                            this.props[section].noNavigation ||
                            this.props.selectedSection === section ||
                            this.props[section].type.indexOf('contentOnly') > -1
                        ) {
                            return (
                                <Section 
                                    key={index}
                                    selectedSection={this.props.selectedSection} 
                                    {...this.props[section]} 
                                    listIndex={this.props.listIndex} 
                                    content={content} 
                                    page={page}
                                    selectItem={this.props.selectItem} 
                                    postData={this.props.postData}
                                    fetchData={this.props.fetchData}
                                />)
                        }
                    })
                }
    		</section>
    	)
  	}
}

const mapStateToProp = (state) => {
    let newState = {}

    newState.location = state.routing.locationBeforeTransitions
    newState.sectionIndex = state.sections.sectionIndex
    newState.listIndex = state.sections.listIndex
    newState.selectedSection = state.sections.selectedSection

    _.forEach(state.sections.sectionIndex, (section) => {
        newState[section] = state.sections[section]
        if(state.sections[section].type.indexOf('contentOnly') < 0)
            newState[`content-${section}`] = state.sections[`content-${section}`]
        if(state.sections[section].type.indexOf('capture email') > -1)
            newState['emailCaptured'] = state.sections.emailCaptured
    })
    
    return newState
}

export default connect(mapStateToProp, Actions)(Sections);
