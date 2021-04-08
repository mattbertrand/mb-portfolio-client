import React, { Component } from 'react'

class Post extends Component {
    
    handleOnClick() {
        this.props.deletePost(this.props.post.id)
    }
    
    render() {
        const { title, content, category, image_link} = this.props
        return (
            <div>
                <h3>{ title }</h3>
                <p>{ content }</p>
                <p>{ category }</p>
                <img src={ image_link } />
                <button onClick={() => this.handleOnClick()}> Delete Post </button>
            </div>
        )
    }
}

export default Post
