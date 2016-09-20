/* @flow */
import React from 'react'
import _ from 'lodash'

import Blob from './blob'
import Cards from './cards'
import Profiles from './profiles'

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
            case 'cardList':
                return <Cards {...this.props}/>
            case 'profileList':
                return <Profiles {...this.props}/>
        }
    }


}

export default Section;
