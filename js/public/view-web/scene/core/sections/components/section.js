/* @flow */
import React from 'react'
import _ from 'lodash'

import Header from './header'
import View from './view/view'

class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    // This goes out and fetchs our data's
    componentWillMount() {
        if(this.props.queries)
            this.props.fetchData(this.props.requestType, this.props.queries, '_FETCH_SECTION', this.props.nestedKey)
    }

  	render() {

    	return (

            <section className='section column-1'>

                {this.props.type === "default" ? <Header {...this.props}/> : null}

                <View {...this.props}/>
            </section>

    	)
  	}

}

export default Section;
