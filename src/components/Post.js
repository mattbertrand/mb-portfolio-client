import React, { Component } from 'react'

class Post extends Component {
    render() {
        const { title, content, category, image_link} = this.props
        return (
            <div>
                <h3>{ title }</h3>
                <p>{ content }</p>
                <p>{ category }</p>
                <p>{ image_link }</p>
            </div>
        )
    }
}

export default Post
