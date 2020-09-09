import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <React.Fragment>
            <nav className="navbar is-success is-spaced" id="top">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <Link to="/">
                            <div className="tags has-addons tags-logo">
                                <span className="tag is-success tag-browser"><strong className="has-text-white">BROWSER</strong></span>
                                <span className="tag is-danger has-text-white">Dashboard</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end has-text-centered-mobile has-text-centered-tablet">
                    <Link className="navbar-item" to="/dashboard">Dashboard</Link>
                    <Link className="navbar-item" to="/protocol-pages">Protocol Pages</Link>
                    <Link className="navbar-item" to="/market-share">Market Share</Link>
                    <Link className="navbar-item" to="/download">Download</Link>
                </div>
            </nav>
        </React.Fragment>
    );
}
