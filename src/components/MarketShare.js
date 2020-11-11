import React from 'react';

export default function MarketShare() {
    React.useEffect(() => {
        document.title = "Browser Dashboard - Market Share";
    }, []);

    return (
        <React.Fragment>
            <section className="hero is-success has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered is-centered">
                            <div className="column is-12">
                                <p className="title is-1">Browser Market Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mt-5">
                <div className="container has-text-centered">
                    <div className="columns">
                        <div className="column is-12">
                            <p className="title is-4 has-text-weight-light">Wikipedia</p>
                            <p className="subtitle is-5"><a href="https://en.wikipedia.org/wiki/Usage_share_of_web_browsers" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Usage_share_of_web_browsers</a></p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-12">
                            <p className="title is-4 has-text-weight-light">StatCounter GlobalStats</p>
                            <p className="subtitle is-5"><a href="https://gs.statcounter.com/browser-market-share/desktop/worldwide" target="_blank" rel="noopener noreferrer">https://gs.statcounter.com/browser-market-share/desktop/worldwide</a></p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-12">
                            <p className="title is-4 has-text-weight-light">W3 Counter</p>
                            <p className="subtitle is-5"><a href="https://www.w3counter.com/globalstats.php" target="_blank" rel="noopener noreferrer">https://www.w3counter.com/globalstats.php</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
