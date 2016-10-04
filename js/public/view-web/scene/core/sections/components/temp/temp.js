/* @flow */
import React from 'react'
import _ from 'lodash'
import Video from 'react-html5video'
import Blob from './../view/components/blob'
import Cards from './../view/components/cards'
import Profiles from './../view/components/profiles'
import Marker from './../view/components/marker'
import Content from './../view/components/content'

import './temp.css'

class Temp extends React.Component {
    constructor(props) {
        super(props)

        this._clickHandler
        this.state = {
            emailCapture: false
        }
    }

    _clickHandler () {
        this.setState({
            emailCapture: true
        })
        this.props.postData('emailCapture', this.refs.emailCapture.value, '_CAPTURE_EMAIL')
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

                    <h1 className="featuredHeader">Staff picks</h1>

                    <ul>
                        <li className="cards column-3">
                            <div className='card'>
                                <div className='image rows-6-5' style={{backgroundImage: `url("https://s3.amazonaws.com/homemade-user-uploads/0neH9RMVHs")`}} > 
                                </div>
                                <div className="namePrice">
                                    <p className='column-6-5 name'>15 Brown Butter Hazelnut - SPECIAL - For Local Youth Charity VARIETY</p>
                                    <p className='column-6-1 price'>$22</p>
                                </div>
                                {
                                    <div className='cook'>
                                        <div className="profileImage" style={{backgroundImage: `url("https://s3.amazonaws.com/homemade-user-uploads/TGOJfh4bid")`}} ></div>
                                        <p className="cookName">Gooey and Co</p>
                                    </div>
                                }
                            </div>
                        </li>
                        <li className="cards column-3">
                            <div className='card'>
                                <div className='image rows-6-5' style={{backgroundImage: `url("https://s3.amazonaws.com/homemade-user-uploads/0neH9RMVHs")`}} > 
                                </div>
                                <div className="namePrice">
                                    <p className='column-6-5 name'>15 Brown Butter Hazelnut - SPECIAL - For Local Youth Charity VARIETY</p>
                                    <p className='column-6-1 price'>$22</p>
                                </div>
                                {
                                    <div className='cook'>
                                        <div className="profileImage" style={{backgroundImage: `url("https://s3.amazonaws.com/homemade-user-uploads/TGOJfh4bid")`}} ></div>
                                        <p className="cookName">Gooey and Co</p>
                                    </div>
                                }
                            </div>
                        </li>
                    </ul>

                    <section className='capture'>
                        {
                            this.state.emailCapture ?
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
                                    <button onClick={() => { this._clickHandler() }}>SUBMIT</button>
                                </div>
                            </span>
                        }
                    </section>

                    <Video className='video rows-6-5' controls loop muted >
                        <source src={"http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"} type="video/webm" />
                    </Video>

                </section>
            </div>

    	)
  	}

}

export default Temp;
