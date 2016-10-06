/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'

import { browserHistory } from 'react-router'

import Icon from './../../common/icon'


import './ribbon.styl'

class Ribbon extends React.Component {
  render() {
    return (
    	<section className='ribbon column-1' style={this.props.app.navStyle}>
        {
          this.props.location.pathname.split('/').length > 2 ? (
              <div className='back' onClick={() => { browserHistory.goBack() }}>
                <Icon icon='Left'/>
                <p>Back</p>
              </div>
          ) : null
        }
        {
          this.renderTitle()
        }
    	</section>
    );
  }

  renderTitle() {
    if(this.props.app.image)
      return <div className='column-3-offset-2 image logo' />
    
    return <h1 className='column-3-offset-2' style={Object.assign({}, this.props.app.titleStyle, {lineHeight})}>{this.props.app.title}</h1>
  }
}

const mapStateToProp = (state) => {
    return {
      app: state.app.app,
      location: state.routing.locationBeforeTransitions
    }
}

export default connect(mapStateToProp, Actions)(Ribbon);
