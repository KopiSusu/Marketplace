/* @flow */
import React from 'react'
import _ from 'lodash'

import Icon from './../../../common/icon'

class Filter extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const filteredItems = _.filter(this.props.items, (item) => {
            switch (this.props.filter) {
                case 'market':
                    return item.title.toLowerCase().indexOf(this.props.query) > -1 ||
                        item.tags.toLowerCase().indexOf(this.props.query) > -1
                case 'chefs':
                    item = item.toJSON()
                    return item.displayName.toLowerCase().indexOf(this.props.query) > -1 ||
                        item.city.toLowerCase().indexOf(this.props.query) > -1 ||
                        item.state.toLowerCase().indexOf(this.props.query) > -1 ||
                        item.neighborhood.toLowerCase().indexOf(this.props.query) > -1
            }
        })
        return (
            <div className='filter rows-1 column-4-3'>
                {
                    _.map(filteredItems, (item, index) => {
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
            case 'market':
                const tags = item.tags.split(' ')
                return (
                    <div key={index} className={`item ${this.props.filter}`}>
                        <div className='image' style={{backgroundImage: `url(${item.imageURL})`}} />
                        <div className='text'>
                            <p className='rows-2 column-1'>{item.title}</p>
                            <div className='tags rows-2 column-1'>
                                {
                                    _.map(tags, (tag, index)=> {
                                        return <p key={index} className='tag'>{tag}</p>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            case 'chefs':
                const address = `${item.neighborhood}, ${item.city}, ${item.state}`
                return (
                    <div key={index} className={`item ${this.props.filter}`}>
                        <div className='image' style={{backgroundImage: `url(${item.imageURL})`}} />
                        <div className='text'>
                            <p className='rows-2 column-1'>{item.displayName}</p>
                            <p className='address rows-2 column-1'>
                                {address}
                            </p>
                        </div>
                    </div>
                )
        }
    }

}

export default Filter;
