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

    render () {

        const totalColumnsAllowed = ( 
            this.props.type.indexOf('ImageOnly') > -1 ||
            this.props.type.indexOf('mixed') > -1
            ? 4 : 2 
        )
        const column = this.props.content.length > totalColumnsAllowed ? totalColumnsAllowed : this.props.content.length
        const center = {lat: this.props.location.latitude, lng: this.props.location.longitude}

        const split = this.props.type.split(' ');
        const followers = this.props.followerCount ? this.props.followerCount : 0

        let className = split[split.length - 1].toLowerCase()

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
                                    <span><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='reviews'>
                                        {
                                            this.props.averageRating ? this.renderRating() : <span><Icon icon='Star'/><p>No Reviews</p></span>
                                        }
                                    </span>
                                </div>
                            </div>
                            
                            <div className='bio column-3-2 rows-1'>
                                <p>{this.props.bio}</p>
                            </div>
                        </div>
                    </li>
                )
            case 'mixed':
            case 'profileList ImageOnly':
                return (
                    <li className={`profiles column-${column}`}>
                        <div className='profile'>
                            <div className={`details column-1 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}} />
                                <div className='details rows-2'>
                                    <h1>{this.props.displayName}</h1>
                                    <span><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <span><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='reviews'>
                                        {
                                            this.props.averageRating ? this.renderRating() : <span><Icon icon='Star'/><p>No Reviews</p></span>
                                        }
                                    </span>
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
                                    <span><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='reviews'>
                                        {
                                            this.props.averageRating ? this.renderRating() : <span><Icon icon='Star'/><p>No Reviews</p></span>
                                        }
                                    </span>
                                    <section className='map'>
                                        <GoogleMap
                                            defaultCenter={center}
                                            options={mapOptions}
                                            bootstrapURLKeys={{
                                                key: 'AIzaSyDCeKLxobeBWkVBqysHso00KSiCeX0EiD4',
                                                language: 'en'
                                            }}
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
                                    <span><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='reviews'>
                                        {
                                            this.props.averageRating ? this.renderRating() : <span><Icon icon='Star'/><p>No Reviews</p></span>
                                        }
                                    </span>
                                    <section className='map'>
                                        <GoogleMap
                                            defaultCenter={center}
                                            options={mapOptions}
                                            bootstrapURLKeys={{
                                                key: 'AIzaSyDCeKLxobeBWkVBqysHso00KSiCeX0EiD4',
                                                language: 'en'
                                            }}
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
            case 'profileList Map ImageOnly Slideover':
                return (
                    <li className={`profiles column-${column}` }>
                        <div className={`profile ${className}`}>
                            <div className={`details column-1 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}} />
                                <div className='rows-2'>
                                    <h1>{this.props.displayName}</h1>
                                    <span><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <span><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='reviews'>
                                        {
                                            this.props.averageRating ? this.renderRating() : <span><Icon icon='Star'/><p>No Reviews</p></span>
                                        }
                                    </span>
                                    <section className='map'>
                                        <GoogleMap
                                            defaultCenter={center}
                                            options={mapOptions}
                                            bootstrapURLKeys={{
                                                key: 'AIzaSyDCeKLxobeBWkVBqysHso00KSiCeX0EiD4',
                                                language: 'en'
                                            }}
                                            defaultZoom={15}>
                                            <Marker lat={center.lat} lng={center.lng} {...this.props} zIndex={2} /* Kreyser Avrora */ />
                                        </GoogleMap>
                                    </section>
                                </div>
                            </div>
                            <div className={`bio ${className}`}>
                                <p className="aboutMeTitle rows-7-1">About Me</p>
                                <p className='rows-7-5'>{this.props.bio}</p>
                                <button className='rows-7-1'>Message Me</button>
                            </div>
                        </div>
                    </li>
                )            
        }
    }

    renderRating () {
        return _.map([1,2,3,4,5], (rating) => {
            if(this.props.averageRating > rating)
                return <Icon key={rating} icon='Star'/>

            return <Icon key={rating} icon='StarOutline'/>
        })
    }

}

export default Profiles;

