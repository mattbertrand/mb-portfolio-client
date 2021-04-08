import React, { Component } from 'react'

class Post extends Component {
    render() {
        const { title, content, category, image_link} = this.props
        return (
            <div>
                <h3>{ title }</h3>
                <p>{ content }</p>
                <p>{ category }</p>
                <img src={ image_link } />
            </div>
        )
    }
}

export default Post
