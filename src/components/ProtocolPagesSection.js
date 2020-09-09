import React from 'react';


export default function ProtocolPagesSection(props) {
    return (
        <React.Fragment>
            <section className="section has-text-centered">
                <div className="container">
                    <p className="title is-3">{props.browser}</p>
                    <div className="columns is-vcentered is-centered">
                        <div className="column is-8 has-text-center">
                            <div className="columns is-mobile is-multiline is-vcentered is-centered">
                                {props.pages && props.pages.map(page =>
                                    <div key={page.uri} className="column is-narrow">
                                        <span className="tag is-warning">{page.uri}</span>
                                    </div>
                                )}
                            </div>
                            {props.debugPages &&
                                <React.Fragment>
                                    <p className="mb-5 mt-5">
                                        <span className="tag is-danger mr-1">NOTE</span> Following pages are for debugging purposes only:
                                    </p>
                                    <div className="columns is-mobile is-multiline is-vcentered is-centered">
                                        {props.debugPages.map(page =>
                                            <div key={page.uri} className="column is-narrow">
                                                <span className="tag is-warning">{page.uri}</span>
                                            </div>
                                        )}
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
