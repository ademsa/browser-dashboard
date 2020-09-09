import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <React.Fragment>
            <section id="top" className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title has-text-centered is-size-1">Page Not Found</h1>
                        <p className="subtitle has-text-centered"><Link to="/">Home</Link></p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
