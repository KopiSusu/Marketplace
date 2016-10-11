/* @flow */
import React from 'react'
import {ReactDOM} from 'react-dom'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as  Actions from './../../../../actions'

import { browserHistory } from 'react-router'

import Icon from './../../common/icon'
import Search from './../search/search'


import './ribbon.styl'

class Ribbon extends React.Component {

  _clickHandler (sectionHeader) {
      this.props.selectItem(sectionHeader, 'section')
      browserHistory.push(`/${sectionHeader}`) 
  }

  render() {

    //If we are scrolled further lets render the other one.
    return (
      <div className="pageHeader">
      	<section className='ribbon column-1' style={this.props.app.navStyle}>
          <div className="ribbonNavigationLinks">
            <Search />              
            {
              this.props.location.pathname.split('/').length > 2 ? (
                  <div className='back' onClick={() => { browserHistory.goBack() }}>
                    <Icon icon='Left'/>
                    <p>Back</p>
                  </div>
              ) : null
            }
            <div className="ribbonLink">BROWSE BY</div>
          </div>
          {
            this.renderTitle()
          }
          <div className="ribbonAccountLinks">
            <div className="ribbonLink sellLink">SELL IN OUR MARKET</div>
            <div className="ribbonLink">SIGN UP</div>
            <div className="ribbonLink">LOG IN</div>
          </div>

      	</section>

        <section className='navigation'>
          <div className='wrapper'>
            <h2 onClick={() => { this._clickHandler('featured') }}className={this.props.selectedSection === 'featured' ? 'selected' : ''} key={'FEATURED'}>{'FEATURED'}</h2>
            <h2 onClick={() => { this._clickHandler('products') }}className={this.props.selectedSection === 'products' ? 'selected' : ''} key={'PRODUCTS'}>{'PRODUCTS'}</h2>
            <h2 onClick={() => { this._clickHandler('producers') }}className={this.props.selectedSection === 'producers' ? 'selected' : ''} key={'PRODUCERS'}>{'PRODUCERS'}</h2>
          </div>
        </section>
      </div>
    );
  }

  renderTitle() {
    if(this.props.app.image)
      return <div className='image brand' />
    return <h1 className='brand' style={Object.assign({}, this.props.app.titleStyle, {lineHeight})}>{this.props.app.title}</h1>
  }
}

const mapStateToProp = (state) => {
    return {
      app: state.app.app,
      location: state.routing.locationBeforeTransitions,
      selectedSection: state.sections.selectedSection
    }
}

export default connect(mapStateToProp, Actions)(Ribbon);
