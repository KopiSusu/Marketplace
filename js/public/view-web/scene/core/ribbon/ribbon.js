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
    //The first one is the small scroll.
    return this.props.scrollPosition > 100 ? (
      <div className="pageHeader">
        <section className='ribbon column-1' style={this.props.app.navStyle}>
          <div className='column-10-1 image logo' />
          <Search />              
          {
            this.props.location.pathname.split('/').length > 2 ? (
                <div className='back' onClick={() => { browserHistory.goBack() }}>
                  <Icon icon='Left'/>
                  <p>Back</p>
                </div>
            ) : null
          }
          <div className="ribbonDiv column-10-1">BROWSE BY</div>
          <section className='smallNavigation'>
            <div className='wrapper'>
              <h2 onClick={() => { this._clickHandler('featured') }}className={this.props.selectedSection === 'featured' ? 'selected' : ''} key={'FEATURED'}>{'FEATURED'}</h2>
              <h2 onClick={() => { this._clickHandler('products') }}className={this.props.selectedSection === 'products' ? 'selected' : ''} key={'PRODUCTS'}>{'PRODUCTS'}</h2>
              <h2 onClick={() => { this._clickHandler('producers') }}className={this.props.selectedSection === 'producers' ? 'selected' : ''} key={'PRODUCERS'}>{'PRODUCERS'}</h2>
            </div>
          </section>
          <div className="ribbonDiv column-10-1">Sell in our market</div>
          <div className="ribbonDiv column-10-1">SIGN UP</div>
          <div className="ribbonDiv column-10-1">LOG IN</div>
        </section>
      </div>
    ) : ( <div className="pageHeader">
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
            <div className="ribbonLink">Browse By ▾</div>
          </div>
          {
            this.renderTitle()
          }
          <div className="ribbonAccountLinks">
            <div className="ribbonLink sellLink">Sell in our Market</div>
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
    /*
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
            <div className="ribbonLink">Browse By ▾</div>
          </div>
          {
            this.renderTitle()
          }
          <div className="ribbonAccountLinks">
            <div className="ribbonLink sellLink">Sell in our Market</div>
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
    */
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
