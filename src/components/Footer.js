import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer is-white" id="about">
                <div className="content has-text-centered grey-light">
                    <div className="tags has-addons my-3 is-block tags-logo">
                        <span className="tag is-success"><strong className="has-text-white">BROWSER</strong></span>
                        <span className="tag is-danger has-text-white">Dashboard</span>
                    </div>
                    <p className="mt-2">
                        Source code available <a href="http://github.com/ademsa/browser-dashboard">here</a> (<a href="https://github.com/ademsa/browser-dashboard/blob/master/LICENSE.md">MIT license</a>).
                    </p>
                </div>
            </footer>
        </React.Fragment>
    );
}
