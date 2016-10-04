/* @flow */
import React from 'react'
import _ from 'lodash'
import GoogleMap from 'google-map-react'
import Video from 'react-html5video'

import Blob from './components/blob'
import Cards from './components/cards'
import Profiles from './components/profiles'
import Marker from './components/marker'

import './components/video.css'

const mapOptions = {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
}

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
            case 'mixed':
                return (
                    <ul className='column-1'>
                        {
                            _.map(this.props.content, (item, index) => {
                                const itemJSON = item.toJSON();
                                if (itemJSON.displayName)
                                    return <Profiles key={index} index={index} {...this.props} {...itemJSON}/>

                                return <Cards key={index} {...this.props} {...itemJSON}/>
                            })
                        }
                    </ul>
                )
            case 'contentOnly':
                return <Blob {...this.props}/>
            case 'contentOnly navigation sections':
                return (
                    <section className='navigation'>
                        <div className='wrapper'>
                            {
                                _.map(this.props.listIndex, (sectionHeader) => {
                                    const selected = this.props.selectedSection
                                    return (
                                        <h2 onClick={() => { this.props.selectItem(sectionHeader, 'section') }}className={this.props.selectedSection === sectionHeader ? 'selected' : ''} key={sectionHeader}>{sectionHeader}</h2>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            case 'contentOnly Hero Image':
                let imageSrc = this.props.imageURL ? this.props.imageURL : ''

                if ( this.props.useData === 'producers' ) {
                    imageSrc = this.props.content[0] ? this.props.content[0].toJSON().kitchenURL : ''
                }

                return (
                    <section className='hero' style={{backgroundImage: `url(${imageSrc})`}}>

                    </section>
                )
            case 'contentOnly Hero Video':
                return (
                    <Video className='hero' controls autoPlay loop muted >
                        <source src={this.props.videoURL} type="video/webm" />
                    </Video>
                )

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
            case 'profileList Map':
            case 'profileList ImageOnly':
            case 'profileList Map ImageOnly Slideover':
                return (
                    <ul className='column-1'>
                        {
                            _.map(this.props.content, (profile, index) => {
                                const profileJSON = profile.toJSON();
                                return <Profiles key={index} index={index} {...this.props} {...profileJSON}/>
                            })
                        }
                    </ul>
                )
            case 'contentOnly Map':
                const center = {lat: 40.688583, lng: -73.930166}
                return (
                    <section className='map'>
                        <GoogleMap
                            defaultCenter={center}
                            options={mapOptions}
                            bootstrapURLKeys={{
                                key: 'AIzaSyDCeKLxobeBWkVBqysHso00KSiCeX0EiD4',
                                language: 'en'
                            }}
                            defaultZoom={13}>
                                {
                                    _.map(this.props.content, (profile, index) => {

                                        const profileJSON = profile.toJSON();

                                        let location = profileJSON.location

                                        if(!location)
                                            location = center

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
