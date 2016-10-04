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

            <div>
                <section className="section featuredHero">
                    <div className="hero">
                        <h1 className="heroTitle">Never stop munching.</h1>
                        <p className="heroText">
                            Homemade is a community of foodies and food producers telling their stories and sharing their products.
                        </p>
                    </div>
                </section>

                <section className='section column-1 featured'>

                    <h1>TEMP!!</h1>

                    <Video className='video rows-6-5' controls loop muted >
                        <source src={"http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"} type="video/webm" />
                    </Video>

                </section>
            </div>

    	)
  	}

}

export default Temp;
