import { useHistory, useParams } from 'react-router'

const PostDetails = () => {
    const { id } = useParams()
    const { data: post } = useFetch('http://localhost:3001/posts/' + id)
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
            <button onClick={handleClick}>Delete Post</button>
        </div>
    )
}

export default PostDetails