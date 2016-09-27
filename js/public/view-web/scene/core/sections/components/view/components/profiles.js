/* @flow */
import React from 'react'
import _ from 'lodash'
import GoogleMap from 'google-map-react'

import Icon from './../../../../../common/icon'
import Marker from './marker'

const mapOptions = {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 1 }, { 'visibility': 'on' }] }]
}

class Profiles extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchData(this.props.callbackTypes, this.props.id, '_FETCH_REVIEWS', this.props.nestedKey, this.props.index)
    }

    render () {
        const totalColumnsAllowed = this.props.type.indexOf('ImageOnly') > -1 ? 4 : 2
        const column = this.props.content.length > totalColumnsAllowed ? totalColumnsAllowed : this.props.content.length
        const center = {lat: this.props.location.latitude, lng: this.props.location.longitude}

        switch (this.props.type) {
            case 'profileList':
                return (
                    <li className={`profiles column-${column}`}>
                        <div className='profile'>
                            <div className={`details column-3 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}} />
                                <div className='details rows-2'>
                                    <h1>{this.props.displayName}</h1>
                                    <span><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                </div>
                            </div>
                            
                            <div className='bio column-3-2 rows-1'>
                                <p>{this.props.bio}</p>
                            </div>
                        </div>
                    </li>
                )
            case 'profileList ImageOnly':
                return (
                    <li className={`profiles column-${column}`}>
                        <div className='profile'>
                            <div className={`details column-1 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}} />
                                <div className='details rows-2'>
                                    <h1>{this.props.displayName}</h1>
                                    <span><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            case 'profileList Map':
                return (
                    <li className={`profiles column-${column}`}>
                        <div className='profile'>
                            <div className={`details column-${this.props.noBio ? '1' : '3'} rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}} />
                                <div className='details rows-2'>
                                    <h1>{this.props.displayName}</h1>
                                    <span><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <section className='map'>
                                        <GoogleMap
                                            defaultCenter={center}
                                            options={mapOptions}
                                            defaultZoom={15}>
                                            <Marker lat={center.lat} lng={center.lng} {...this.props} zIndex={2} /* Kreyser Avrora */ />
                                        </GoogleMap>
                                    </section>
                                </div>
                            </div>

                            <div className='bio column-3-2 rows-1'>
                                <p>{this.props.bio}</p>
                            </div>

                        </div>
                    </li>
                )
            case 'profileList Map ImageOnly':
                return (
                    <li className={`profiles column-${column}`}>
                        <div className='profile'>
                            <div className={`details column-1 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}} />
                                <div className='rows-2'>
                                    <h1>{this.props.displayName}</h1>
                                    <span><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <section className='map'>
                                        <GoogleMap
                                            defaultCenter={center}
                                            options={mapOptions}
                                            defaultZoom={15}>
                                            <Marker lat={center.lat} lng={center.lng} {...this.props} zIndex={2} /* Kreyser Avrora */ />
                                        </GoogleMap>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            case 'profileList Map ImageOnly Popover':
                return (
                    <li className={`profiles column-${column}`}>
                        <div className='profile'>
                            <div className={`details column-1 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}} />
                                <div className='rows-2'>
                                    <h1>{this.props.displayName}</h1>
                                    <span><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <section className='map'>
                                        <GoogleMap
                                            defaultCenter={center}
                                            options={mapOptions}
                                            defaultZoom={15}>
                                            <Marker lat={center.lat} lng={center.lng} {...this.props} zIndex={2} /* Kreyser Avrora */ />
                                        </GoogleMap>
                                    </section>
                                </div>
                            </div>
                            <div className='bio popover'>
                                <p>{this.props.bio}</p>
                            </div>
                        </div>
                    </li>
                )
        }
    }

}

export default Profiles;





