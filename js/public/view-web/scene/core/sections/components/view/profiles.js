/* @flow */
import React from 'react'
import _ from 'lodash'

import Icon from './../../../../common/icon'

class Profiles extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <ul className='column-1'>
                {
                    _.map(this.props.content, (profile, index) => {
                        const column = this.props.content.length > 4 ? 4 : this.props.content.length
                        profile = profile.toJSON();
                        return (
                            <li key={index} className={`profiles column-${column}`}>
                                <div className='profile'>
                                    <div className='details column-3-1 rows-1'> 
                                        <div className='image rows-2' style={{backgroundImage: `url(${profile.imageURL})`}}></div>
                                        <div className='details rows-2'>
                                            <h1>{profile.displayName}</h1>
                                            <span><Icon icon='Location'/><p>{`${profile.city}, ${profile.state}`}</p></span>
                                        </div>
                                    </div>
                                    <div className='bio column-3-2 rows-1'>
                                        <p>{profile.bio}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

}

export default Profiles;