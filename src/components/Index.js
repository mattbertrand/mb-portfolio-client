import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
    render() {

        
        return (
            <div>
                List Page
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
