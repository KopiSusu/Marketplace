/* @flow */
import React from 'react'
import _ from 'lodash'
import Video from 'react-html5video'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler () {
        location.href = "http://shop.eathomemade.com/" + this.props.cook.uniqueName + "/" + this.props.objectId + "/true"
    }

    render () {

        const column = this.props.content.length > 3 ? 3 : this.props.content.length
        return (
            <li className={`cards content column-${column}`}>
                {
                    this.renderContent()
                }
            </li>
        )
    }

    renderContent() {
        switch (this.props.type) {
            case 'videoCard':
                return <div className={`${this.props.type}`} onClick={() => this.clickHandler()}>
                    <Video className='video rows-6-5' controls loop muted >
                        <source src={this.props.videoURL} type="video/webm" />
                    </Video>
                    <div className="namePrice">
                        <p className='column-1 name'>{this.props.title}</p>
                        <p className='column-1 price'>${this.props.description}</p>
                    </div>
                </div>

        }
    }

}


export default Content;