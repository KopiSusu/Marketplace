/* @flow */
import React from 'react'
import _ from 'lodash'
import GoogleMap from 'google-map-react';


import Blob from './components/blob'
import Cards from './components/cards'
import Profiles from './components/profiles'
import Marker from './components/marker'

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
            case 'contentOnly Map':
                return (
                    <section className='map' style={{height: '200px'}}>
                        <GoogleMap
                            defaultCenter={{lat: 40.730610, lng: -73.935242}}
                            defaultZoom={9}>
                                {
                                    _.map(this.props.content, (profile, index) => {

                                        const profileJSON = profile.toJSON();

                                        let location = profileJSON.location

                                        if(!location)
                                            location = {lat: 40.730610, lng: -73.935242}

                                        return <Marker key={index} lat={location.latitude} lng={location.longitude} {...profileJSON} zIndex={2} /* Kreyser Avrora */ />
                                    }) 
                                }
                        </GoogleMap>
                    </section>
                )
        }
    }


}

export default Section;
