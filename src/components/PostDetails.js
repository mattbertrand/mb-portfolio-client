import { useHistory, useParams } from 'react-router'
import useFetch from '../actions/useFetch'

const PostDetails = () => {
    const { id } = useParams()
    const { data: post, error, isPending } = useFetch('http://localhost:3001/posts/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:3001/posts/' + post.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/posts')
        })
    }

    return (
        <div>
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { post && (
                <div>
                <h2>{ post.title }</h2>
                <p>{ post.content }</p>
                <p>{ post.category }</p>
                <img src={ post.image_link } />

                <button onClick={handleClick}>Delete Post</button>
                </div>
            )}
            
        </div>
    )
}

export default PostDetails