/* @flow */
import React from 'react'
import { browserHistory } from 'react-router'
import _ from 'lodash'

class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler () {
        browserHistory.push(`/products/${this.props.objectId}`)
    }

    render () {
        const column = this.props.content.length > 3 ? 3 : this.props.content.length

        return (

            <li className={`cards column-${column}`}>
                <div className='card' onClick={() => this.clickHandler()}>
                    <div ref={`card-${this.props.objectId}`} className='image rows-6-5' style={{backgroundImage: `url(${this.props.imageURLS[0]})`}}> 

                    </div>
                    <div className="namePrice">
                        <p className='name'>{this.props.name}</p>
                        <p className='price'>${this.props.price}</p>
                    </div>
                    {
                        this.props.page === 'Profile' ? null :
                        <div className='cook'>
                            <div className="profileImage" style={{backgroundImage: `url(${this.props.cook.imageURL})`}} ></div>
                            <p className="cookName">{this.props.cook.displayName}</p>
                        </div>
                    }
                </div>
            </li>
        )
    }

}

                        // <div className='cardActions'>
                        //     <div className='action favorite'>
                        //         <svg>
                        //             <path d="M16.5,30.3L2.8,16.6C1,14.8,0,12.3,0,9.7s1-5,2.8-6.9c3.8-3.8,9.9-3.8,13.7-0.1c3.8-3.7,9.9-3.7,13.6,0.1
                        //             C32,4.7,33,7.1,33,9.7s-1,5-2.8,6.9L16.5,30.3z M9.7,2.2c-1.9,0-3.9,0.7-5.3,2.2C3,5.8,2.2,7.7,2.2,9.7c0,2,0.8,3.9,2.2,5.3l0,0
                        //             l12.1,12.1L28.6,15c1.4-1.4,2.2-3.3,2.2-5.3c0-2-0.8-3.9-2.2-5.3c-2.9-2.9-7.7-2.9-10.6,0l-1.5,1.5L15,4.4
                        //             C13.6,2.9,11.7,2.2,9.7,2.2z"/>
                        //         </svg>
                        //     </div>
                        // </div>

export default Cards;