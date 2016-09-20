/* @flow */
import React from 'react'
import {
	IoSocialWhatsappOutline, 
	IoSocialFacebook, 
	IoEmail, 
	IoIosBell,
	IoChevronDown,
	IoPlusCircled,
	IoPlusRound,
	IoRecord,
	IoCloseCircled,
	IoIosSearchStrong,
	IoAndroidStar,
	IoAndroidStarOutline,
	IoAndroidMoreVertical,
	IoCash,
	IoGearA,
	IoChatbubbles,
	IoHappyOutline
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
	        case 'WhatsApp':
	          	return <IoSocialWhatsappOutline/>
	        case 'Facebook':
	          	return <IoSocialFacebook/>
	        case 'Email':
	          	return <IoEmail/>
	        case 'Plus':
	         	return <IoPlusCircled/>
	        case 'PlusOutline':
	        	return <IoPlusRound/>
	        case 'Bell':
	         	return <IoIosBell/>
	        case 'Down':
	        	return <IoChevronDown/>
	        case 'Circle':
	        	return <IoRecord/>
	        case 'Close':
	        	return <IoCloseCircled/>
	        case 'Search':
	        	return <IoIosSearchStrong/>
	        case 'StarOutline':
	        	return <IoAndroidStarOutline/>
	        case 'Options':
	        	return <IoAndroidMoreVertical/>
	        case 'Cash':
	        	return <IoCash/>
	        case 'Gear':
	        	return <IoGearA/>
	        case 'Chat':
	        	return <IoChatbubbles/>
	        case 'Happy':
	        	return <IoHappyOutline/>
      	}
    }
}

export default Icon;