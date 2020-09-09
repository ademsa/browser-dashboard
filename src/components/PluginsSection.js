import React from 'react';
import Plugin from './Plugin';

export default function PluginsSection(props) {
    function scrollToNotes(event) {
        event.preventDefault();
        document.getElementById("plugins-notes").scrollIntoView({ "behavior": "smooth", "block": "start" });
    }

    return (
        <React.Fragment>
            <section className="section" id="plugins">
                <div className="container">
                    <p className="title is-3 has-text-centered">Plugins</p>
                    {props.plugins.length > 0 ?
                        <React.Fragment>
                            <p className="subtitle is-5 has-text-centered">{props.plugins.length} plugin(s) detected <a href="#plugins-notes" onClick={scrollToNotes}>*</a></p>
                            <div className="columns is-vcentered is-centered is-mobile is-multiline">
                                <div className="column is-2-mobile is-1-tablet has-text-centered">
                                    <p className="title is-5">ID</p>
                                </div>
                                <div className="column is-6-mobile is-3-tablet has-text-centered-mobile">
                                    <p className="title is-5">Name</p>
                                </div>
                                <div className="column has-text-centered-mobile">
                                    <p className="title is-5">Filename / Version</p>
                                </div>
                            </div>
                            {props.plugins.map(item =>
                                <Plugin key={item.id} item={item} startIdx={props.startIdx} />
                            )}
                        </React.Fragment>
                        :
                        <p className="subtitle is-5 has-text-centered">No plugins detected <a href="#plugins-notes" onClick={scrollToNotes}>*</a></p>
                    }
                </div>
            </section>
        </React.Fragment>
    );
}
