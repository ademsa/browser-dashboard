import React from 'react';

export default function Download() {
    React.useEffect(() => {
        document.title = "Browser Dashboard - Download";
    }, []);

    return (
        <React.Fragment>
            <section className="hero is-success has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-centered">
                            <div className="column is-12">
                                <p className="title is-1">Browser Download</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero is-warning has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-mobile is-multiline">
                            <div className="column">
                                <p className="title is-1"><a className="has-text-grey-darker" href="https://www.mozilla.org/en-US/firefox/">Firefox</a></p>
                                <a className="has-text-grey-darker mr-3" href="https://en.wikipedia.org/wiki/Firefox">Wikipedia</a>
                                |
                                <a className="has-text-grey-darker ml-3" href="https://addons.mozilla.org/en-US/firefox/">Add-ons for Firefox</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <p className="subtitle is-6 mb-0">Download Options:</p>
                    <nav className="navbar is-spaced is-mobile navbar-items-centered py-0 mb-3 mt-5">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://www.mozilla.org/en-US/firefox/download/thanks/">Firefox</a>
                            <a className="navbar-item" href="https://www.mozilla.org/en-US/firefox/channel/desktop/">Firefox Beta</a>
                            <a className="navbar-item" href="https://www.mozilla.org/en-US/firefox/channel/desktop/">Firefox Developer Edition</a>
                            <a className="navbar-item" href="https://www.mozilla.org/en-US/firefox/channel/desktop/">Firefox Nightly</a>
                        </div>
                    </nav>
                    <br />
                    <nav className="navbar is-spaced is-mobile navbar-items-centered py-0 mb-3">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=org.mozilla.firefox">Firefox for Android</a>
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta">Firefox for Android Beta</a>
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=org.mozilla.fenix">Firefox Nightly for Android</a>
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=org.mozilla.focus">Firefox Focus for Android</a>
                        </div>
                    </nav>
                    <br />
                    <nav className="navbar is-spaced is-mobile navbar-items-centered py-0 mb-3">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://apps.apple.com/us/app/firefox-private-safe-browser/id989804926">Firefox for iOS</a>
                            <a className="navbar-item" href="https://apps.apple.com/us/app/firefox-focus-privacy-browser/id1055677337">Firefox Focus for iOS</a>
                        </div>
                    </nav>
                </div>
            </section>
            <section className="hero is-danger has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-mobile is-multiline">
                            <div className="column">
                                <p className="title is-1"><a className="has-text-white" href="https://www.google.com/intl/en-us/chrome/">Google Chrome</a></p>
                                <a className="has-text-white mr-3" href="https://en.wikipedia.org/wiki/Google_Chrome">Wikipedia</a>
                                |
                                <a className="has-text-white ml-3" href="https://chrome.google.com/webstore/category/extensions">Chrome Web Store Extensions</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <p className="subtitle is-6 mb-0">Download Options:</p>
                    <nav className="navbar is-spaced navbar-items-centered py-0 mb-3 mt-5">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://www.google.com/intl/en-us/chrome/">Google Chrome</a>
                            <a className="navbar-item" href="https://www.google.com/intl/en-US/chrome/beta/">Chrome Beta</a>
                        </div>
                    </nav>
                    <br />
                    <nav className="navbar is-spaced navbar-items-centered py-0 mb-3">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=com.android.chrome">Google Chrome for Android</a>
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=com.chrome.beta">Chrome Beta for Android</a>
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=com.chrome.dev">Chrome Dev for Android</a>
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=com.chrome.canary">Chrome Canary for Android</a>
                        </div>
                    </nav>
                    <br />
                    <nav className="navbar is-spaced navbar-items-centered py-0 mb-3">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://apps.apple.com/us/app/google-chrome/id535886823">Google Chrome for iOS</a>
                        </div>
                    </nav>
                </div>
            </section>
            <section className="hero is-info has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-mobile is-multiline">
                            <div className="column">
                                <p className="title is-1"><a className="has-text-white" href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a></p>
                                <a className="has-text-white mr-3" href="https://en.wikipedia.org/wiki/Microsoft_Edge">Wikipedia</a>
                                |
                                <a className="has-text-white ml-3" href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home">Extensions for Microsoft Edge</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <p className="subtitle is-6 mb-0">Download Options:</p>
                    <nav className="navbar is-spaced navbar-items-centered py-0 mb-3 mt-5">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a>
                        </div>
                    </nav>
                    <br />
                    <nav className="navbar is-spaced navbar-items-centered py-0 mb-3">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://play.google.com/store/apps/details?id=com.microsoft.emmx">Microsoft Edge for Android</a>
                        </div>
                    </nav>
                    <br />
                    <nav className="navbar is-spaced navbar-items-centered py-0 mb-3">
                        <div className="navbar-menu is-active">
                            <a className="navbar-item" href="https://apps.apple.com/us/app/microsoft-edge/id1288723196">Microsoft Edge for iOS</a>
                        </div>
                    </nav>
                </div>
            </section>
        </React.Fragment>
    );
}
