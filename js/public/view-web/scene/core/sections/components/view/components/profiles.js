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
            ? 3 : 2 
        )
        const column = this.props.content.length > totalColumnsAllowed ? totalColumnsAllowed : this.props.content.length
        const center = {lat: this.props.location.latitude, lng: this.props.location.longitude}

        const split = this.props.type.split(' ');
        const followers = this.props.followerCount ? this.props.followerCount : 0

        let className = split[split.length - 1].toLowerCase()

        switch (this.props.type) {
            case 'profileList':
                return (
                    <li className={`profiles cards column-${column}`}>
                        <div className='profile card'>
                            <div className={`details column-3 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}}>
                                    <div className='cardActions'>
                                        <div className='action favorite'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <path d="M16.5,30.3L2.8,16.6C1,14.8,0,12.3,0,9.7s1-5,2.8-6.9c3.8-3.8,9.9-3.8,13.7-0.1c3.8-3.7,9.9-3.7,13.6,0.1
                                                C32,4.7,33,7.1,33,9.7s-1,5-2.8,6.9L16.5,30.3z M9.7,2.2c-1.9,0-3.9,0.7-5.3,2.2C3,5.8,2.2,7.7,2.2,9.7c0,2,0.8,3.9,2.2,5.3l0,0
                                                l12.1,12.1L28.6,15c1.4-1.4,2.2-3.3,2.2-5.3c0-2-0.8-3.9-2.2-5.3c-2.9-2.9-7.7-2.9-10.6,0l-1.5,1.5L15,4.4
                                                C13.6,2.9,11.7,2.2,9.7,2.2z"/>
                                            </svg>
                                        </div>
                                        <div className='action follow'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <g>
                                                    <path d="M16.8,12.8c3.4,0,6.2-2.8,6.2-6.2s-2.8-6.2-6.2-6.2s-6.2,2.8-6.2,6.2S13.4,12.8,16.8,12.8z M13.1,6.5
                                                        c0-2.1,1.7-3.7,3.7-3.7c2.1,0,3.7,1.7,3.7,3.7s-1.7,3.7-3.7,3.7C14.8,10.3,13.1,8.6,13.1,6.5z"/>
                                                    <path d="M16.8,16c4.8,0,8.5,2.4,8.5,5.6l0,1.4l2.5,0l0-1.4c0-4.6-4.7-8.1-11-8.1s-11,3.5-11,8.1l-0.1,5.5h10.4v-2.5H8.4
                                                        c0,0-0.1,0-0.1,0l0.1-3C8.4,18.4,12,16,16.8,16z"/>
                                                    <polygon points="23.8,21.8 21.3,21.8 21.3,24.6 18.5,24.6 18.5,27.1 21.3,27.1 21.3,29.9 23.8,29.9 23.8,27.1 26.7,27.1 26.7,24.6 
                                                        23.8,24.6   "/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='details rows-2'>
                                    <p className="name">{this.props.displayName}</p>
                                    <span className="detail location"><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <span className="detail followers"><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='detail reviews'>
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
                    <li className={`profiles cards column-${column}`}>
                        <div className='profile card'>
                            <div className={`details column-1 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}}>
                                    <div className='cardActions'>
                                        <div className='action favorite'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <path d="M16.5,30.3L2.8,16.6C1,14.8,0,12.3,0,9.7s1-5,2.8-6.9c3.8-3.8,9.9-3.8,13.7-0.1c3.8-3.7,9.9-3.7,13.6,0.1
                                                C32,4.7,33,7.1,33,9.7s-1,5-2.8,6.9L16.5,30.3z M9.7,2.2c-1.9,0-3.9,0.7-5.3,2.2C3,5.8,2.2,7.7,2.2,9.7c0,2,0.8,3.9,2.2,5.3l0,0
                                                l12.1,12.1L28.6,15c1.4-1.4,2.2-3.3,2.2-5.3c0-2-0.8-3.9-2.2-5.3c-2.9-2.9-7.7-2.9-10.6,0l-1.5,1.5L15,4.4
                                                C13.6,2.9,11.7,2.2,9.7,2.2z"/>
                                            </svg>
                                        </div>
                                        <div className='action follow'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <g>
                                                    <path d="M16.8,12.8c3.4,0,6.2-2.8,6.2-6.2s-2.8-6.2-6.2-6.2s-6.2,2.8-6.2,6.2S13.4,12.8,16.8,12.8z M13.1,6.5
                                                        c0-2.1,1.7-3.7,3.7-3.7c2.1,0,3.7,1.7,3.7,3.7s-1.7,3.7-3.7,3.7C14.8,10.3,13.1,8.6,13.1,6.5z"/>
                                                    <path d="M16.8,16c4.8,0,8.5,2.4,8.5,5.6l0,1.4l2.5,0l0-1.4c0-4.6-4.7-8.1-11-8.1s-11,3.5-11,8.1l-0.1,5.5h10.4v-2.5H8.4
                                                        c0,0-0.1,0-0.1,0l0.1-3C8.4,18.4,12,16,16.8,16z"/>
                                                    <polygon points="23.8,21.8 21.3,21.8 21.3,24.6 18.5,24.6 18.5,27.1 21.3,27.1 21.3,29.9 23.8,29.9 23.8,27.1 26.7,27.1 26.7,24.6 
                                                        23.8,24.6   "/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='details rows-2'>
                                    <p className="name">{this.props.displayName}</p>
                                    <span className='detail location'><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <span className='detail followers'><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='detail reviews'>
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
                    <li className={`profiles cards column-${column}`}>
                        <div className='profile card'>
                            <div className={`details column-${this.props.noBio ? '1' : '3'} rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}}>
                                    <div className='cardActions'>
                                        <div className='action favorite'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <path d="M16.5,30.3L2.8,16.6C1,14.8,0,12.3,0,9.7s1-5,2.8-6.9c3.8-3.8,9.9-3.8,13.7-0.1c3.8-3.7,9.9-3.7,13.6,0.1
                                                C32,4.7,33,7.1,33,9.7s-1,5-2.8,6.9L16.5,30.3z M9.7,2.2c-1.9,0-3.9,0.7-5.3,2.2C3,5.8,2.2,7.7,2.2,9.7c0,2,0.8,3.9,2.2,5.3l0,0
                                                l12.1,12.1L28.6,15c1.4-1.4,2.2-3.3,2.2-5.3c0-2-0.8-3.9-2.2-5.3c-2.9-2.9-7.7-2.9-10.6,0l-1.5,1.5L15,4.4
                                                C13.6,2.9,11.7,2.2,9.7,2.2z"/>
                                            </svg>
                                        </div>
                                        <div className='action follow'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <g>
                                                    <path d="M16.8,12.8c3.4,0,6.2-2.8,6.2-6.2s-2.8-6.2-6.2-6.2s-6.2,2.8-6.2,6.2S13.4,12.8,16.8,12.8z M13.1,6.5
                                                        c0-2.1,1.7-3.7,3.7-3.7c2.1,0,3.7,1.7,3.7,3.7s-1.7,3.7-3.7,3.7C14.8,10.3,13.1,8.6,13.1,6.5z"/>
                                                    <path d="M16.8,16c4.8,0,8.5,2.4,8.5,5.6l0,1.4l2.5,0l0-1.4c0-4.6-4.7-8.1-11-8.1s-11,3.5-11,8.1l-0.1,5.5h10.4v-2.5H8.4
                                                        c0,0-0.1,0-0.1,0l0.1-3C8.4,18.4,12,16,16.8,16z"/>
                                                    <polygon points="23.8,21.8 21.3,21.8 21.3,24.6 18.5,24.6 18.5,27.1 21.3,27.1 21.3,29.9 23.8,29.9 23.8,27.1 26.7,27.1 26.7,24.6 
                                                        23.8,24.6   "/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='details rows-2'>
                                    <p className="name">{this.props.displayName}</p>
                                    <span className='detail location'><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <span className='detail followers'><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='detail reviews'>
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
                    <li className={`profiles cards column-${column}`}>
                        <div className='profile card'>
                            <div className={`details column-1 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}}>
                                    <div className='cardActions'>
                                        <div className='action favorite'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <path d="M16.5,30.3L2.8,16.6C1,14.8,0,12.3,0,9.7s1-5,2.8-6.9c3.8-3.8,9.9-3.8,13.7-0.1c3.8-3.7,9.9-3.7,13.6,0.1
                                                C32,4.7,33,7.1,33,9.7s-1,5-2.8,6.9L16.5,30.3z M9.7,2.2c-1.9,0-3.9,0.7-5.3,2.2C3,5.8,2.2,7.7,2.2,9.7c0,2,0.8,3.9,2.2,5.3l0,0
                                                l12.1,12.1L28.6,15c1.4-1.4,2.2-3.3,2.2-5.3c0-2-0.8-3.9-2.2-5.3c-2.9-2.9-7.7-2.9-10.6,0l-1.5,1.5L15,4.4
                                                C13.6,2.9,11.7,2.2,9.7,2.2z"/>
                                            </svg>
                                        </div>
                                        <div className='action follow'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <g>
                                                    <path d="M16.8,12.8c3.4,0,6.2-2.8,6.2-6.2s-2.8-6.2-6.2-6.2s-6.2,2.8-6.2,6.2S13.4,12.8,16.8,12.8z M13.1,6.5
                                                        c0-2.1,1.7-3.7,3.7-3.7c2.1,0,3.7,1.7,3.7,3.7s-1.7,3.7-3.7,3.7C14.8,10.3,13.1,8.6,13.1,6.5z"/>
                                                    <path d="M16.8,16c4.8,0,8.5,2.4,8.5,5.6l0,1.4l2.5,0l0-1.4c0-4.6-4.7-8.1-11-8.1s-11,3.5-11,8.1l-0.1,5.5h10.4v-2.5H8.4
                                                        c0,0-0.1,0-0.1,0l0.1-3C8.4,18.4,12,16,16.8,16z"/>
                                                    <polygon points="23.8,21.8 21.3,21.8 21.3,24.6 18.5,24.6 18.5,27.1 21.3,27.1 21.3,29.9 23.8,29.9 23.8,27.1 26.7,27.1 26.7,24.6 
                                                        23.8,24.6   "/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='rows-2'>
                                    <p className="name">{this.props.displayName}</p>
                                    <span className='detail location'><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <span className='detail followers'><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='detail reviews'>
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
                    <li className={`profiles cards column-${column}` }>
                        <div className={`profile card ${className}`}>
                            <div className={`details column-1 rows-1`}> 
                                <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}}>
                                    <div className='cardActions'>
                                        <div className='action favorite'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <path d="M16.5,30.3L2.8,16.6C1,14.8,0,12.3,0,9.7s1-5,2.8-6.9c3.8-3.8,9.9-3.8,13.7-0.1c3.8-3.7,9.9-3.7,13.6,0.1
                                                C32,4.7,33,7.1,33,9.7s-1,5-2.8,6.9L16.5,30.3z M9.7,2.2c-1.9,0-3.9,0.7-5.3,2.2C3,5.8,2.2,7.7,2.2,9.7c0,2,0.8,3.9,2.2,5.3l0,0
                                                l12.1,12.1L28.6,15c1.4-1.4,2.2-3.3,2.2-5.3c0-2-0.8-3.9-2.2-5.3c-2.9-2.9-7.7-2.9-10.6,0l-1.5,1.5L15,4.4
                                                C13.6,2.9,11.7,2.2,9.7,2.2z"/>
                                            </svg>
                                        </div>
                                        <div className='action follow'>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 33 30.3" >
                                                <g>
                                                    <path d="M16.8,12.8c3.4,0,6.2-2.8,6.2-6.2s-2.8-6.2-6.2-6.2s-6.2,2.8-6.2,6.2S13.4,12.8,16.8,12.8z M13.1,6.5
                                                        c0-2.1,1.7-3.7,3.7-3.7c2.1,0,3.7,1.7,3.7,3.7s-1.7,3.7-3.7,3.7C14.8,10.3,13.1,8.6,13.1,6.5z"/>
                                                    <path d="M16.8,16c4.8,0,8.5,2.4,8.5,5.6l0,1.4l2.5,0l0-1.4c0-4.6-4.7-8.1-11-8.1s-11,3.5-11,8.1l-0.1,5.5h10.4v-2.5H8.4
                                                        c0,0-0.1,0-0.1,0l0.1-3C8.4,18.4,12,16,16.8,16z"/>
                                                    <polygon points="23.8,21.8 21.3,21.8 21.3,24.6 18.5,24.6 18.5,27.1 21.3,27.1 21.3,29.9 23.8,29.9 23.8,27.1 26.7,27.1 26.7,24.6 
                                                        23.8,24.6   "/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className='rows-2'>
                                    <p className="name">{this.props.displayName}</p>
                                    <span className='detail location'><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                                    <span className='detail followers'><Icon icon='Follower'/><p>{`${followers} Followers`}</p></span>
                                    <span className='detail reviews'>
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

