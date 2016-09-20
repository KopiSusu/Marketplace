/* @flow */
import React from 'react'
import {
	IoLocation
} from 'react-icons/lib/io'

class Icon extends React.Component {
	render() {
		return (
			<div 
				className={ (this.props.iconClass ? this.props.iconClass : '' ) + (this.props.under ? ' under' : '' ) + " icon"}
			>
				{this.renderIcon()}
				{
					this.props.under ? (
						<p>{this.props.under}</p>
					) : null
				}
			</div>
		);
	}

	renderIcon() {
    	switch (this.props.icon) {
	        case 'Location':
	          	return <IoLocation/>
      	}
    }
}

export default Icon;