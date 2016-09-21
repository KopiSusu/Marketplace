/* @flow */
import React from 'react'
import _ from 'lodash'

import Blob from './components/blob'
import Cards from './components/cards'
import Profiles from './components/profiles'

class Section extends React.Component {
    constructor(props) {
        super(props)
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
                return (
                    <ul className='column-1'>
                        {
                            _.map(this.props.content, (card, index) => {
                                const cardJSON = card.toJSON()

                                return <Cards key={index} {...this.props} {...cardJSON}/>
                            })
                        }
                    </ul>
                )
            case 'profileList':
                return (
                    <ul className='column-1'>
                        {
                            _.map(this.props.content, (profile, index) => {
                                const profileJSON = profile.toJSON();

                                return <Profiles key={index} {...this.props} {...profileJSON}/>
                            })
                        }
                    </ul>
                )
            case 'profileListImageOnly':
                return (
                    <ul className='column-1'>
                        {
                            _.map(this.props.content, (profile, index) => {
                                const profileJSON = profile.toJSON();

                                return <Profiles noBio={true} key={index} index={index} {...this.props} {...profileJSON}/>
                            })
                        }
                    </ul>
                )
        }
    }


}

export default Section;
