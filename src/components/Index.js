import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PostDetails from './PostDetails'

const Index =({match, posts})  => {
    // render() {
    //     const posts = this.props.posts.map( (post, i) => <Post key={i} title={post.title} content={post.content} category={post.category} image_link={post.image_link} />)

    return (
        <div>
            <h1>All Posts</h1>
            { posts.map((post, idx) => (
                <Link key={idx} to={`/posts/${post.id}`}>
                    <h2>{ post.title }</h2>
                    <Route path={`${match.url}/postId`} component={PostDetails} />
                </Link>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Index)
