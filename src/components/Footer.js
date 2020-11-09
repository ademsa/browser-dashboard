import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer py-5">
                <div className="content has-text-centered grey-light">
                    <p className="has-text-weight-light my-0 is-size-7">
                        Source code available <a href="http://github.com/ademsa/browser-dashboard">here</a> (<a href="https://github.com/ademsa/browser-dashboard/blob/master/LICENSE.md">MIT license</a>).
                    </p>
                    <p className="has-text-weight-light mt-2 is-size-7">
                        Developed by
                    </p>
                    <a href="https://ademsa.github.io">
                        <img className="author" src="/browser-dashboard/author.svg" alt="Author" />
                    </a>
                    <p className="has-text-weight-light my-2 is-size-7">
                        Checkout other projects
                    </p>
                    <a href="https://ademsa.github.io/regex360" className="mx-2 has-text-weight-normal">RegEx360</a>
                    <a href="https://ademsa.github.io/web-page-data" className="has-text-weight-normal">Web Page Data</a>
                </div>
            </footer>
        </React.Fragment>
    );
}
