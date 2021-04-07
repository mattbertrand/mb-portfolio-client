import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/posts">Projects</Link></li>
                    <li><Link to="/posts/new">Add a Project</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar
