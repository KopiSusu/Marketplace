/* @flow */
import React from 'react'
import { browserHistory } from 'react-router'
import _ from 'lodash'
import GoogleMap from 'google-map-react'
import Video from 'react-html5video'

import Blob from './components/blob'
import Cards from './components/cards'
import Profiles from './components/profiles'
import Marker from './components/marker'
import Content from './components/content'
import Selected from './components/selected'

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
        this._clickHandler = this._clickHandler.bind(this)
    }

    _clickHandler (sectionHeader) {
        this.props.selectItem(sectionHeader, 'section')
        browserHistory.push(`/${sectionHeader}`) 
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
            case 'selected':
                return (
                    <section className='selected' >
                        {
                            _.map(this.props.content, (selected, index) => {
                                const selectedJSON = selected.toJSON();
                                return <Selected key={index} {...this.props} {...selectedJSON}/>
                            })
                        }
                    </section>
                )
            case 'contentList':
                return (
                    <ul className='column-1'>
                        {
                            this.props.title ? <div className="header">
                                <h1 className="featuredHeader">{this.props.title}</h1>
                                <div className="line"></div>
                                {
                                    this.props.subTitle ? <span>
                                        <p className="featuredText">{this.props.subTitle}</p>
                                    </span> : null
                                }
                            </div> : null
                        }
                        {
                            _.map(this.props.content, (content, index) => {
                                return <Content key={index} {...this.props} {...content}/>
                            })
                        }
                    </ul>
                )
            case 'contentOnly':
                return <Blob {...this.props}/>
            case 'contentOnly capture email':
                return (
                    <section className='capture'>
                        {
                            this.props.content ?
                            <div className='text captured rows-1 column-1'>
                                <h1>You are signed up for updates!</h1>
                                <p>We will keep you on track for some tasty food!</p>
                            </div> : <span>
                                <div className='text rows-1 column-6-2'>
                                    <h1>Get the newsletter</h1>
                                    <p>Sign up and never miss an exciting meal!</p>
                                </div>
                                <input ref='emailCapture' className='rows-1 column-6-3'/>
                                <div className='button rows-1 column-6-1'>
                                    <button onClick={() => { this.props.postData('emailCapture', this.refs.emailCapture.value, '_CAPTURE_EMAIL') }}>SUBMIT</button>
                                </div>
                            </span>
                        }
                    </section>
                )
            case 'contentOnly navigation':
                return null;
            case 'contentOnly Hero Image':
                let imageSrc = this.props.imageURL ? this.props.imageURL : ''

                if ( this.props.useData === 'producers' ) {
                    imageSrc = this.props.content[0] ? this.props.content[0].toJSON().kitchenURL : ''
                }

                return (
                    <section className='hero' ref='hero' style={{backgroundImage: `url(${imageSrc})`}}>

                    </section>
                )
            case 'contentOnly Hero Image Text':
                let textImageSrc = this.props.imageURL ? this.props.imageURL : ''

                if ( this.props.useData === 'producers' ) {
                    textImageSrc = this.props.content[0] ? this.props.content[0].toJSON().kitchenURL : ''
                }

                return (
                    <section className="section featuredHero" style={{backgroundImage: `linear-gradient(180deg,rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${textImageSrc})`}}>
                        <div ref='hero' className="hero">
                            <h1 className="heroTitle">{this.props.title}</h1>
                            <p className="heroText">
                                {this.props.body}
                            </p>
                        </div>
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
                            this.props.title ? <div className="header">
                                <h1 className="featuredHeader">{this.props.title}</h1>
                                <div className="line"></div>
                                {
                                    this.props.subTitle ? <span>
                                        <p className="featuredText">{this.props.subTitle}</p>
                                    </span> : null
                                }
                            </div> : null
                        }
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
                            this.props.title ? <div className="header">
                                <h1 className="featuredHeader">{this.props.title}</h1>
                                <div className="line"></div>
                                {
                                    this.props.subTitle ? <span>
                                        <p className="featuredText">{this.props.subTitle}</p>
                                    </span> : null
                                }
                            </div> : null
                        }
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
