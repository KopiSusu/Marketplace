/* @flow */
import React from 'react'
import _ from 'lodash'
import Video from 'react-html5video'
import Blob from './../view/components/blob'
import Cards from './../view/components/cards'
import Profiles from './../view/components/profiles'
import Marker from './../view/components/marker'
import Content from './../view/components/content'

class Temp extends React.Component {
    constructor(props) {
        super(props)

        this._clickHandler = this._clickHandler.bind(this)
        this._changePage = this._changePage.bind(this)

        this.state = {
            emailCapture: false,
            currentPage: 'featured'
        }
    }

    _clickHandler () {
        this.setState({
            emailCapture: true
        })
        this.props.postData('emailCapture', this.refs.emailCapture.value, '_CAPTURE_EMAIL')
    }

    // to call this, copy blow code into tags
    // For page change to Blog
    // onClick={() => { this._changePage('blog') }}

    // For page change to featured
    // onClick={() => { this._changePage('featured') }}
    _changePage (pageChange) {
        this.setState({
            currentPage: pageChange
        })
    }

  	render() {
        switch (this.state.currentPage) {
            case 'featured':
                return (
                    <div>
                        <section className="section featuredHero">
                            <div ref='hero' className="hero">
                                <h1 className="heroTitle">YUM.</h1>
                                <p className="heroText">
                                    The Foodworks tells the stories of Brooklyn’s independent food producers and sells their products alongside, inviting you to help forge the new path in food from wherever you are.
                                </p>
                            </div>
                        </section>

                        <section className='section column-1 featured'>

                            <section className='capture'>
                                {
                                    this.state.emailCapture ?
                                    <div className='text captured rows-1 column-1'>
                                        <p className="signedUpText">You are signed up for updates!</p>
                                    </div> : <span>
                                        <div className='text rows-1 column-10-4'>
                                            <h1>Get the newsletter</h1>
                                            <p>Sign up and never miss an exciting meal!</p>
                                        </div>
                                        <input ref='emailCapture' className='rows-1 column-10-4'/>
                                        <div className='button rows-1 column-10-2'>
                                            <button onClick={() => { this._clickHandler() }}>SUBMIT</button>
                                        </div>
                                    </span>
                                }
                            </section>

                            <div className="header">
                                <h1 className="featuredHeader">SHAKING & BAKING</h1>
                                <div className="line"></div>
                                <p className="featuredText">These are the people making waves right now.</p>
                            </div>

                            <ul className="content">
                                <li className="cards column-3" onClick={() => { this._changePage('blog') }}>
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

                            <div className="header">
                                <h1 className="featuredHeader">TASTE</h1>
                                <div className="line"></div>
                                <p className="featuredText">See what’s on tap in our shop.</p>
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

                            <div className="header">
                                <h1 className="featuredHeader">Featured Videos</h1>
                                <div className="line"></div>
                            </div>
                            <ul>
                                <li className="cards content column-3">
                                    <div className="videoCard card">
                                        <Video className='video rows-6-5' controls loop muted poster="https://images.unsplash.com/photo-1471017204627-b28469ba98cc?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1026&q=80&cs=tinysrgb" >
                                            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
                                        </Video>
                                        <div className='details rows-2'>
                                            <p className='column-1 name'>Izzys Bizzy Biscuits</p>
                                            <p className="description">Izzy gets bizzy in this dope interview about his biscuits to die for</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards content column-3">
                                    <div className="videoCard card">
                                        <Video className='video rows-6-5' controls loop muted poster="https://images.unsplash.com/photo-1471017204627-b28469ba98cc?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1026&q=80&cs=tinysrgb" >
                                            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
                                        </Video>
                                        <div className='details rows-2'>
                                            <p className='column-1 name'>Izzys Bizzy Biscuits</p>
                                            <p className="description">Izzy gets bizzy in this dope interview about his biscuits to die for</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards content column-3">
                                    <div className="videoCard card">
                                        <audio controls>
                                           <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4" type='audio/mp4'/>
                                        </audio>
                                        <div className='details rows-2'>
                                            <p className='column-1 name'>Izzys Bizzy Biscuits</p>
                                            <p className="description">Izzy gets bizzy in this dope interview about his biscuits to die for</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="header">
                                <h1 className="featuredHeader">Where the Magic Happens</h1>
                                <div className="line"></div>
                            </div>

                        </section>
                    </div>
                ) 
            case 'blog':
                return (
                    <div><h1 onClick={() => { this._changePage('featured') }}>Some blog post</h1></div>
                )
        }
    }

}

export default Temp;
