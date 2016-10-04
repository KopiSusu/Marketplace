/* @flow */
import React from 'react'
import _ from 'lodash'
import Video from 'react-html5video'

import './temp.css'

class Temp extends React.Component {
    constructor(props) {
        super(props)
    }

  	render() {

    	return (

            <section className='section column-1'>

                <h1>TEMP!!</h1>

                <Video className='video rows-6-5' controls loop muted >
                    <source src={"http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"} type="video/webm" />
                </Video>

            </section>

    	)
  	}

}

export default Temp;
