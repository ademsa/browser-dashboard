import React from 'react';
import Spec from './Spec';
import Plugin from './Plugin';
import Font from './Font';
import Feature from './Feature';

export default function SearchResultsSection(props) {
    return (
        <React.Fragment>
            <section className="section mb-5" id="search-results">
                <div className="container">
                    <p className="title is-3 has-text-centered">Search Results</p>
                    {props.searchTermNote &&
                        <p className="subtitle is-5 my-3 has-text-centered has-text-danger">{props.searchTermNote}</p>
                    }
                    {props.items.length > 0 ?
                        <React.Fragment>
                            <div className="columns is-vcentered is-centered is-mobile is-multiline">
                                <div className="column is-1 has-text-centered">
                                    <p className="title is-5">ID</p>
                                </div>
                                <div className="column is-4">
                                    <p className="title is-5">Name</p>
                                </div>
                                <div className="column">
                                    <p className="title is-5">Support</p>
                                </div>
                            </div>
                            {props.items.map((item, idx) =>
                                <React.Fragment key={idx}>
                                    {item.type === "spec" &&
                                        <Spec item={item.value} />
                                    }
                                    {item.type === "plugin" &&
                                        <Plugin item={item.value} startIdx={props.pluginsStartIdx} />
                                    }
                                    {item.type === "font" &&
                                        <Font item={item.value} />
                                    }
                                    {item.type === "feature" &&
                                        <Feature item={item.value} />
                                    }
                                </React.Fragment>
                            )}
                        </React.Fragment>
                        :
                        <p className="subtitle is-5 my-3 has-text-centered">
                            Nothing found. Try with different name or ID.
                        </p>
                    }
                </div>
            </section>
        </React.Fragment>
    );
}
