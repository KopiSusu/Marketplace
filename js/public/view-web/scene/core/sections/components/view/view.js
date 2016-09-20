/* @flow */
import React from 'react'
import _ from 'lodash'

import Blob from './blob'
import Cards from './cards'

class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    // This goes out and fetchs our data's
    componentWillMount() {
        // this.props.fetchData('chat', '_FETCH_MESSAGES')
    }

  	render() {

    	return (

            <section className='view column-1'>

                {
                    this.renderView()
                }


            </section>

    	)
  	}

    renderView() {
        switch (this.props.type) {
            case 'contentOnly':
                return <Blob {...this.props}/>
            default:
                return <Cards {...this.props}/>
        }
    }


}

export default Section;
