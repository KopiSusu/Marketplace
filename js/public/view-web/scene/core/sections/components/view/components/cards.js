/* @flow */
import React from 'react'
import _ from 'lodash'

class Cards extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const column = this.props.content.length > 4 ? 4 : this.props.content.length

        return (
            <li className={`cards column-${column}`}>
                <div className='card'>
                    <div className='image rows-6-5' style={{backgroundImage: `url(${this.props.imageURLS[0]})`}}> 
                        <div className='hidden'>
                            <nav className='shown'>
                                <h2 className='column-6-5'>{this.props.name}</h2>
                                <p className='column-6-1'>${this.props.price}</p>
                            </nav>
                            <div className='ingredients'>
                                <p><span className='label'>INGREDIANTS: </span>{this.props.ingredients}</p>
                            </div>
                        </div>
                    </div>
                    <button className='image rows-6-1 column-1'>ADD TO CART</button>
                </div>
            </li>
        )
    }

}

export default Cards;