/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'

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
    //The first retyurns the big scroll and the small fixed one. Second case returns just the big one that is position relative.
    return this.props.scrollPosition > 100 ? (
      <div>
        <div className="smallPageHeader">
          <section className='ribbon column-1' style={this.props.app.navStyle}>
            <div className='image brand' />
            <div className="ribbonNavigationLinks">
              {
                this.props.location.pathname.split('/').length > 2 ? (
                    <div className='ribbonLink back' onClick={() => { browserHistory.goBack() }}>
                      <Icon icon='Left'/>
                      <p>Back</p>
                    </div>
                ) : null
              }
              <Search />              
              <div className="ribbonLink">Browse By ▾</div>
            </div>
            <section className='smallNavigation'>
              <div className='wrapper'>
                <h2 onClick={() => { this._clickHandler('featured') }}className={this.props.selectedSection === 'featured' ? 'selected' : ''} key={'FEATURED'}>{'FEATURED'}</h2>
                <h2 onClick={() => { this._clickHandler('products') }}className={this.props.selectedSection === 'products' ? 'selected' : ''} key={'PRODUCTS'}>{'PRODUCTS'}</h2>
                <h2 onClick={() => { this._clickHandler('producers') }}className={this.props.selectedSection === 'producers' ? 'selected' : ''} key={'PRODUCERS'}>{'PRODUCERS'}</h2>
              </div>
            </section>
            <div className="ribbonAccountLinks">
              <a href="http://eathomemade.com/" target="_blank" className="ribbonLink sellLink">Sell in our market</a>
              <div className="ribbonLink">SIGN UP</div>
              <div className="ribbonLink">LOG IN</div>
            </div>
          </section>
        </div>
        {this.renderTopNav()}
      </div>
    ) : (
      <div>
      {this.renderTopNav()}
      </div>
    );
  }

  renderTopNav() {
    return (
      <div className="pageHeader">
        <section className='ribbon column-1' style={this.props.app.navStyle}>
          <div className="ribbonNavigationLinks">
            {
              this.props.location.pathname.split('/').length > 2 ? (
                  <div className='ribbonLink back' onClick={() => { browserHistory.goBack() }}>
                    <Icon icon='Left'/>
                    <p>Back</p>
                  </div>
              ) : null
            }
            <Search />              
            <div className="ribbonLink">Browse By ▾</div>
          </div>
          {
            this.renderTitle()
          }
          <div className="ribbonAccountLinks">
            <a href="http://eathomemade.com/" target="_blank" className="ribbonLink sellLink">Sell in our market</a>
            <div className="ribbonLink">Sign Up</div>
            <div className="ribbonLink">Log In</div>
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
      selectedSection: state.sections.selectedSection,
      scrollPosition: state.sections.scrollPosition
    }
}

export default connect(mapStateToProp, Actions)(Ribbon);
