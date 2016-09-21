/* @flow */
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'

import './ribbon.styl'

class Ribbon extends React.Component {
  render() {
    return (
    	<section className='ribbon column-1' style={this.props.app.navStyle}>
        {
          this.renderTitle()
        }
    	</section>
    );
  }

  renderTitle() {
    const lineHeight = this.props.app.navStyle.height ? this.props.app.navStyle.height : '50px'
    
    if(this.props.app.image)
      return <div className='column-3-offset-2 image' style={{height: lineHeight, backgroundImage: `url(${this.props.app.image})`}}/>
    
    return <h1 className='column-3-offset-2' style={Object.assign({}, this.props.app.titleStyle, {lineHeight})}>{this.props.app.title}</h1>
  }
}

const mapStateToProp = (state) => {
    return {
      app: state.app.app
    }
}

export default connect(mapStateToProp, Actions)(Ribbon);
