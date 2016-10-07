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

    _changePage (pageChange) {
        this.setState({
            currentPage: pageChange
        })
    }

    _navigateFromTemp(url) {
        location.href = url
    }

  	render() {
        switch (this.state.currentPage) {
            case 'featured':
                return (
                    <div>

                        <section className='section column-1 featured'>

                            <div className="header">
                                <h1 className="featuredHeader">Featured Content</h1>
                                <div className="line"></div>
                            </div>
                            <ul>
                                <li className="cards content column-3">
                                    <div className="videoCard card">
                                        <Video className='video rows-6-5' controls loop muted poster="https://i.ytimg.com/vi_webp/ETqFn3wubl0/sddefault.webp" >
                                            <source src="https://s3.amazonaws.com/homemade-images/Pilot%20Light%20Tv%20Episode%20%233-%20Anisha%20Samant.mp4" />
                                        </Video>
                                        <div className='details rows-2'>
                                            <p className='column-1 name'>Pilot Light TV: Anisha</p>
                                            <p className="description">Meet Anisha Samant, a former computer programmer grows fresh ingredients in her ...</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards content column-3">
                                    <div className="videoCard card">
                                        <div className="audioControlsWrapper">
                                            <audio controls>
                                               <source src="https://s3.amazonaws.com/homemade-images/Mike%E2%80%99s%20Hot%20Honey%20-%20A%20Hobby%20to%20100%2C000%20Units_270720713_soundcloud.mp3" type='audio/mp3'/>
                                            </audio>
                                        </div>
                                        <div className='details rows-2'>
                                            <p className='column-1 name'>Mike’s Hot Honey: A Hobby to 100,000 Units</p>
                                            <p className="description">We spent some time with Michael Kurtz in Union Square park recently. This man and his team are...</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="cards content column-3" onClick={() => { this._changePage('blog') }}>
                                    <div className="videoCard card">
                                        <div className='image rows-2' style={{backgroundImage: `url("https://cdn-images-1.medium.com/max/800/1*9FrRNSIhDuMUGuc8eOuGqw.jpeg")`}}>
                                
                                        </div>
                                        <div className='details rows-2'>
                                            <p className='column-1 name'>The Magic of Selling an Experience</p>
                                            <p className="description">Read our interview with Dr. Claw from a houseboat with Ben Sargent</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </section>
                    </div>
                ) 
            case 'blog':
                return (
                    <div>

                        <div className="blogPost">
                            <a onClick={() => { this._changePage('featured') }}>« Back</a>
                            <h1>The Magic of Selling an Experience</h1>
                            <p className="subHeader">Podcast #2: Live from a Houseboat with Ben Sargent</p>

                            <img src="https://cdn-images-1.medium.com/max/800/1*9FrRNSIhDuMUGuc8eOuGqw.jpeg" />

                            <p>Dr. Klaw is a folk legend. From his apartment, <b>he sold over 250 fresh lobster rolls <em>a day. That’s a massive number of sandwiches to produce solo.</em></b> What began as a dine-in experience ended when the fire department and his landlord found enough propane in his backyard to blow up the block. Yeeaaa..no. Unable to host people in the “underground lobster pound,” Ben Sargent–– the man soon to be known as “Dr. Klaw”–– started doing deliveries only. Then something unique happened.
                            </p>

                            <p><em>(Popcorn would be good now)</em></p>

                            <p>While on a delivery, Ben and a customer had a moment. As they passed each other, the customer had the money rolled in-between his fingers, so that when he shook Ben’s hand, the money was in Ben had the money. Ben discreetly passed him the lobster roll. It was a quick, nonchalant exchange.
                            </p>

                            <p>If this sounds like a drug deal, that’s because–– swap dope for steamy lobster roll–– it was. That’s the same thought Ben had, and he took it all the way.
                            </p>

                            <h2>A Food Dealer</h2>
                            <h3>It’s like The Wire with seafood.</h3>

                            <img src="https://cdn-images-1.medium.com/max/800/1*xLUj7frlICKkDojiI-Viow.jpeg" />

                            <p>There was a method to the madness. I’ll break down a couple takeaways from our interview.
                            </p>

                            <p>The formula–– or at least the way I think about it–– goes like this:
                            </p>

                            <ul>
                                <li>Novelty + Experience</li>
                                <li>Context</li>
                                <li>Food</li>
                                <li>Neighborhood</li>
                            </ul>

                            <h2>People Pay for Feelings (Novelty + Experience)</h2>

                            <p>Dr. Klaw was a New York City drug dealer on the outside and a Massachusetts mariner on the inside. Customers could buy hot and buttery lobster rolls in the middle of the night from a wannabe gangster wearing a gold crustacean chain in 3 steps.
                            </p>

                            <ol>
                                <li>NText a secret number to arrange the order and pick-up location.</li>
                                <li>Go to location</li>
                                <li>Food</li>
                                <li>Pay using the method described above.</li>
                            </ol>

                            <p>Situations varied, but this was the overall flow.
                            </p>

                            <p>Overtime, a trend emerged: people hanging out late wanted to show their friends something cool. There’s a bit of psychology to this but it’s simple. Part of being cool is being the one who introduces friends to new and novel experiences. This is why we share things on social media, evangelize indie music, etc. Dr. Klaw tapped into that. He was the experience.
                            </p>

                            <p>One quotable:</p>

                            <p className="quote"><em>This might sound bad but I think my real job was to get people laid. Think about it, you’re at a bar and the DJ goes “Last call!” So everything is winding down and you tell your date, “Hold on, I got ‘a guy.’” Now if that’s not their thing, they’re probably like “What? It’s 3 in the morning and…” So then you go to a corner or an alley and some guy in a hoodie walks up and you give him the money and exchange– no questions asked. Then you open up hot steamy lobster rolls. Guaranteed, you just scored some points! That’s a nice guy to know. Sometimes, I wish I knew that guy.</em>
                            </p>

                            <p>The shady nature of the Klaw hand-off made people feel “bad” in a “good” way. Every second of it felt like a drug deal, but in the end, it was only lobster. Customers got to live a fantasy for a little while and were rewarded with a delicious sandwich. People pay for feelings.
                            </p>

                            <h3>Context</h3>

                            <p>Dr. Klaw was an evening thing. You could only get these lobster rolls at night. Obviously there were exceptions, but one of our proven methods for success is keeping a schedule and window of opportunity. The evening time slot added to the experience and made him the go-to person for fourth meal.
                            </p>

                            <h3>Food</h3>

                            <p>The food was authentic. One of Ben’s biggest pet peeves was that no one did lobster rolls right anymore. All the garnishes, overloading and fancy breads went against his regional recipe. His background growing up in a mariner family and understanding of true New England cuisine added to his story and his perspective on food. Early on, New Englanders vouched to their authenticity.
                            </p>

                            <h3>Neighborhood</h3>

                            <p>This could be a part of the context conversation, but it deserves some extra thought. Understanding your environment will give you an advantage when it comes to finding out who and where your customers are. Dr. Klaw was based in Greenpoint, Brooklyn, and took advantage of the local landmarks, rising interest in seafood and late-night bar culture and more to create a niche and expand his opportunities.
                            </p>

                            <p>I believe a mix of these things is why he nearly blew up beyond manageable proportions.
                            </p>

                            <p>Oh and the price point: $14 early on which eventually rose to $20 each. So that’s $20 a roll times at least 2oo orders a day. You do the math.
                            </p>

                            <img src="https://cdn-images-1.medium.com/max/800/1*TrGOMYwRgvfPmeDf59TsMw.jpeg" />

                            <h2>There were cons...</h2>

                            <p>The sheer volume of order made jealous. “Why did I go to college?!” I thought, but it had a price. Ben sacrificed personal space in exchange for operating space in his apartment. He swapped leg room for lobster room, quite literally. Eventually, he received a 3-page cease and desist letter from the DOH and he knew where things were headed.
                            </p>

                            <br /><br />

                            <p>Listen to our interview with Ben below to learn what it was like to go through all of this.
                            </p>

                            <iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269638082&amp;color=ff5500"></iframe>

                         </div>
                    </div>
                )
        }
    }

}

export default Temp;
