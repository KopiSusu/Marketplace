/* @flow */
import React from 'react'
import {
	IoLocation,
	IoSearch,
	IoCloseCircled,
	IoPerson,
	IoIosNutrition,
	IoPricetags,
	IoAndroidStar,
	IoAndroidStarOutline,
	IoChevronLeft,
	IoEasel,
	IoPersonStalker
} from 'react-icons/lib/io'

class Icon extends React.Component {
	render() {
		return (
			<div className={ (this.props.iconClass ? this.props.iconClass : '' ) + (this.props.under ? ' under' : '' ) + " icon"}>
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
	        case 'Search':
	        	return <IoSearch/>
	        case 'Cancel':
	        	return <IoCloseCircled/>
	        case 'Person':
	        	return <IoPerson/>
	        case 'Food':
	        	return <IoIosNutrition/>
	        case 'Market':
	        	return <IoPricetags/>
	        case 'Star':
	        	return <IoAndroidStar/>
	       	case 'StarOutline':
	       		return <IoAndroidStarOutline/>
	       	case 'Follower':
	       		return <IoPersonStalker/>
	       	case 'Left':
	       		return <IoChevronLeft/>
	       	case 'Content':
	       		return <IoEasel/>
      	}
    }
}

export default Icon;