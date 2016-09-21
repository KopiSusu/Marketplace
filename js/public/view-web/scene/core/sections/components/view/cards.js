/* @flow */
import React from 'react'
import _ from 'lodash'

class Cards extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <ul className='column-1'>
                {
                    _.map(this.props.content, (card, index) => {
                        const column = this.props.content.length > 4 ? 4 : this.props.content.length
                        card = card.toJSON()
                        return (
                            <li key={index} className={`cards column-${column}`}>
                                <div className='card'>
                                    <div className='image rows-6-5' style={{backgroundImage: `url(${card.imageURLS[0]})`}}> 
                                        <div className='hidden'>
                                            <nav className='shown'>
                                                <h2 className='column-6-5'>{card.name}</h2>
                                                <p className='column-6-1'>${card.price}</p>
                                            </nav>
                                            <div className='ingredients'>
                                                <p><span className='label'>INGREDIANTS: </span>{card.ingredients}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='image rows-6-1 column-1'>ADD TO CART</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}

export default Cards;