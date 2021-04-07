import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class Index extends Component {
    render() {
        const posts = this.props.posts.map( (post, i) => <Post key={i} title={post.title} content={post.content} category={post.category} image_link={post.image_link} />)

        return (
            <div>
                { posts }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Index)
