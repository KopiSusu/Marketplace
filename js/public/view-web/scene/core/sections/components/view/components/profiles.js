/* @flow */
import React from 'react'
import _ from 'lodash'

import Icon from './../../../../../common/icon'

class Profiles extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetchData(this.props.callbackTypes, this.props.id, '_FETCH_REVIEWS', this.props.nestedKey, this.props.index)
    }

    render () {
        const column = this.props.content.length > 4 ? 4 : this.props.content.length

        return (
            <li className={`profiles column-${column}`}>
                <div className='profile'>
                    <div className={`details column-${this.props.noBio ? '1' : '3'} rows-1`}> 
                        <div className='image rows-2' style={{backgroundImage: `url(${this.props.imageURL})`}} />
                        <div className='details rows-2'>
                            <h1>{this.props.displayName}</h1>
                            <span><Icon icon='Location'/><p>{`${this.props.city}, ${this.props.state}`}</p></span>
                        </div>
                    </div>
                    {
                        this.props.noBio ? null : <div className='bio column-3-2 rows-1'>
                            <p>{this.props.bio}</p>
                        </div>
                    }
                </div>
            </li>
        )
    }

}

export default Profiles;





