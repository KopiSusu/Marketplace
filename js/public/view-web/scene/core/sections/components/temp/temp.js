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

                    <div className="header">
                        <h1 className="featuredHeader">Staff picks</h1>
                        <div className="line"></div>
                    </div>

                    <ul className="content">
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
                        <div className='text rows-1 column-6-2'>
                            <h1>Get the newsletter</h1>
                            <p>Sign up and never miss an exciting meal!</p>
                        </div>
                        <input ref='emailCapture' className='rows-1 column-6-3'/>
                        <div className='button rows-1 column-6-1'>
                            <button onClick={() => { this._clickHandler() }}>SUBMIT</button>
                        </div>
                    </section>

                    <div className="header">
                        <h1 className="featuredHeader">Bestsellers</h1>
                        <div className="line"></div>
                    </div>

                    <ul className="content">
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

                    <div className="header">
                        <h1 className="featuredHeader">Video of the Week</h1>
                        <div className="line"></div>
                    </div>

                    <Video className='video' controls loop muted >
                        <source src={"http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"} type="video/webm" />
                    </Video>

                    <div className="header">
                        <h1 className="featuredHeader">Where the Magic Happens</h1>
                        <div className="line"></div>
                    </div>

                </section>
            </div>

    	)
  	}

}

export default Temp;
