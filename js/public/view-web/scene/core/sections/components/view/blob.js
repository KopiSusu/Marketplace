/* @flow */
import React from 'react'
import _ from 'lodash'

class Blob extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const findStyle = this.props.text.split('<style>')
        const style = this.props.contentStyle
        return (
            <p className='column-2 center' style={this.props.style}>
                {
                    _.map(findStyle, (string, index) => {
                        if(index === 0 || index === (findStyle.length - 1))
                            return string

                        return (
                            <span key={index} style={style}>{string}</span>
                        )
                    })
                }
            </p>
        )
    }

}

export default Blob;
