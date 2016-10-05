/* @flow */
import React from 'react'
import _ from 'lodash'
import { browserHistory } from 'react-router'

import Icon from './../../../common/icon'

class Filter extends React.Component {

    constructor(props) {
        super(props)
    }

    _clickHandler (item) {
        switch (this.props.filter) {
            case 'producers':
                browserHistory.push(`/p/${item.objectId}`);
                break;
            case 'products':
                location.href = "http://shop.eathomemade.com/" + item.cook.uniqueName + "/" + item.objectId + "/true";
                break;
        }
    }

    render () {
        return (
            <div className='filter rows-1 column-4-3'>
                {
                    _.map(this.props.items, (item, index) => {
                        if(item._objCount || item._objCount === 0)
                            item = item.toJSON()
                        return this.renderSearch(item, index)
                    })
                }
            </div>
        )
    }

    renderSearch (item, index) {
        switch (this.props.filter) {
            case 'producers':
                const address = `${item.city}, ${item.state}`
                return (
                    <div key={index} className={`item ${this.props.filter}`} onClick={() => { this._clickHandler(item) }}>
                        <div className='image' style={{backgroundImage: `url(${item.imageURL})`}} />
                        <div className='text'>
                            <p className='rows-2 column-1'>{item.displayName}</p>
                            <p className='address rows-2 column-1'>
                                {address}
                            </p>
                        </div>
                    </div>
                )
            case 'products':
                return (
                    <div key={index} className={`item ${this.props.filter}`} onClick={() => { this._clickHandler(item) }}>
                        <div className='image' style={{backgroundImage: `url(${item.imageURLS[0]})`}} />
                        <div className='text'>
                            <p className='rows-2 column-1'>{item.name}</p>
                            <p className='address rows-2 column-1'>
                                {item.ingredients}
                            </p>
                        </div>
                    </div>
                )
        }
    }

}

export default Filter;
