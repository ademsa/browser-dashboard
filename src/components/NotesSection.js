import React from 'react';

export default function NotesSection() {
    return (
        <React.Fragment>
            <section className="hero is-warning is-medium mt-5">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-one-quarter has-text-centered">
                                <p className="title is-3">Notes</p>
                            </div>
                            <div className="column is-three-quarter">
                                <p className="title is-5" id="plugins-notes">Plugins</p>
                                <p className="subtitle is-6 my-3">Plugins are detected using <a href="https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/plugins">navigator.plugins</a>.</p>
                                <br />
                                <p className="title is-5" id="fonts-notes">Fonts</p>
                                <p className="subtitle is-6 my-2">
                                    More information about font lists:
                                </p>
                                <p className="subtitle is-6 my-2">
                                    <a href="https://developer.apple.com/fonts/system-fonts/">https://developer.apple.com/fonts/system-fonts/</a>
                                </p>
                                <p className="subtitle is-6 my-2">
                                    <a href="https://docs.microsoft.com/en-us/typography/fonts/windows_10_font_list">https://docs.microsoft.com/en-us/typography/fonts/windows_10_font_list</a>
                                </p>
                                <p className="subtitle is-6 my-2">
                                    `fc-list` command output from Ubuntu 20.04 LTS
                                </p>
                                <p className="subtitle is-6 mt-5">
                                    <span className="tag is-danger mr-3">NOTE</span>Due to lack of proper cross-browser supported API, font availability is estimated by comparing HTML elements size when different font families are used. So, don't be surprised with some false positives/negatives.
                                </p>
                                <br />
                                <p className="title is-5" id="features-notes">Features</p>
                                <p className="subtitle is-6 my-3">Feature data from <a href="https://caniuse.com">caniuse.com</a>, available for use under a <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> license.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
