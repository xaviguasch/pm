import React from 'react'
import { Link } from 'react-router-dom'


const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <div>
            Check out the following things I've done:
        </div>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>


    </div>
)

export default PortfolioPage