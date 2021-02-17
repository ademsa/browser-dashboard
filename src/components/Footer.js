import React from 'react';

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer py-5">
                <div className="content has-text-centered grey-light">
                    <p className="has-text-weight-light my-0 is-size-7">
                        Source code available <a href="http://github.com/ademsa/browser-dashboard">here</a> (<a href="https://github.com/ademsa/browser-dashboard/blob/master/LICENSE.md">MIT license</a>).
                    </p>
                    <br />
                    <a className="mt-2" href="https://ademsabic.com">
                        <img className="author" src="/browser-dashboard/author.svg" alt="Author" />
                    </a>
                    <p className="has-text-weight-light mt-2 mb-0 is-size-7">
                        Explore other projects
                    </p>
                    <a href="https://ademsa.github.io/regex360" className="mx-2 has-text-weight-normal">RegEx360</a>
                    <a href="https://ademsa.github.io/web-page-data" className="has-text-weight-normal">Web Page Data</a>
                </div>
            </footer>
        </React.Fragment>
    );
}
