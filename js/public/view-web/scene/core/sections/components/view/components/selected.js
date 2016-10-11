/* @flow */
import React from 'react'
import _ from 'lodash'

class Selected extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
        	<span>
        		<div className='rows-3-2 column-1'>

        			<div className='rows-1 column-3-1'>
        				<div className='image column-1 rows-1' style={{backgroundImage: `url(${this.props.imageURLS[0]})`}}/> 
	        		</div>
	        		<div className='text rows-1 column-3-2'>
                        <div className='details rows-3-1'>
                            <h1 className='column-4-3' >{this.props.name}</h1>
                            <div className='column-4-1'>
                                <h2 className='column-1' >${this.props.price}</h2>
                                <p className='column-1'>Shipping/$5</p>
                            </div>
                        </div>
                        <p>{this.props.ingredients}</p>
                        <p>{this.props.information}</p>
	        		</div>

        		</div>
        		<div className='rows-3-1 column-1'>

        			<div className='profile rows-1 column-3-1'>
                        <div className='rows-1 column-3-1'>
                            <div className='image column-1 rows-1' style={{backgroundImage: `url(${this.props.cook.imageURL})`}}/> 
                        </div>
                        <div className='text rows-1 column-3-2'>
                            <h2>{this.props.cook.displayName}</h2>
                            <p>{this.props.cook.shortBio}</p>
                        </div>
	        		</div>
	        		<div className='rows-1 column-3-2'>

	        		</div>

        		</div>
        	</span>
        )
    }

}

export default Selected;
