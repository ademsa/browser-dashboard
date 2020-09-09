import React from 'react';
import ProtocolPagesSection from './ProtocolPagesSection';
import { FirefoxURIs, ChromeURIs, ChromeDebugURIs, EdgeURIs } from './../data/protocol-pages';

export default function ProtocolPages() {
    React.useEffect(() => {
        document.title = "Browser Dashboard - Protocol Pages";
    }, []);

    return (
        <React.Fragment>
            <section className="hero is-success has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-centered">
                            <div className="column is-12">
                                <p className="title is-1">Browser Protocol Pages</p>
                                <p className="subtitle is-3">Bellow is a list of internal pages implemented in various browsers. <br />They reveal internal state, settings and preferences, built-in functionality, etc.</p>
                                <span className="tag is-danger mr-1">NOTE</span> For security reasons, these pages must be accessed manually, by typing uri in address bar.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProtocolPagesSection browser="Mozilla Firefox" pages={FirefoxURIs} />
            <ProtocolPagesSection browser="Google Chrome" pages={ChromeURIs} debugPages={ChromeDebugURIs} />
            <ProtocolPagesSection browser="Microsoft Edge" pages={EdgeURIs} />

            <section className="section has-text-centered mt-5">
                <div className="container">
                    <p className="title is-4">References</p>
                    <a href="https://en.wikipedia.org/wiki/About_URI_scheme">https://en.wikipedia.org/wiki/About_URI_scheme</a>
                    <br />
                    <a className="mt-1" href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/The_about_protocol">https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/The_about_protocol</a>
                </div>
            </section>
        </React.Fragment>
    );
}
