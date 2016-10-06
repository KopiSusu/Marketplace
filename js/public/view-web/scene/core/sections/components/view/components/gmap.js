/* @flow */
import React from 'react'
import _ from 'lodash'

import GoogleMap from 'google-map-react'

class Gmap extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
       		<GoogleMap defaultCenter={{lat: 59.938043, lng: 30.337157}} defaultZoom={9}>
      		</GoogleMap>
        )
    }

}

export default Gmap;
