import React, { Component } from 'react'

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        category: '',
        image_link: ''
    }

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

    render() {
        return (
            <div>
                <h3>Create New Project</h3>
                <form>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={this.state.title} onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea type="text" name="content" id="content" value={this.state.content} onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" id="category" value={this.state.category} onChange={ this.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor="image_link">Image</label>
                        <input type="text" name="image_link" id="image_link" value={this.state.image_link} onChange={ this.handleChange }/>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewPost
