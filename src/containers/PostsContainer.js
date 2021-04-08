import React, { Component } from 'react'
import { connect } from 'react-redux'


export class PostsContainer extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({posts: state.posts})

const mapDispatchToProps = dispatch => ({
    addPost: text => dispatch({ type: 'ADD_POST', text}),
    deleteRestaurant: id => dispatch({ type: 'DELETE_POST', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
