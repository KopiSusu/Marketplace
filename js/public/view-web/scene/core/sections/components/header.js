/* @flow */
import React from 'react'
import _ from 'lodash'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

  	render() {

    	return (

            <section className='header column-1'>

                <span className='line'></span>
                <h1>{this.props.title}</h1>

            </section>

    	)
  	}

}

export default Header;
