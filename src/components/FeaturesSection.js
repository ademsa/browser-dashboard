import React from 'react';
import Feature from './Feature';

export default function FeaturesSection(props) {
    function scrollToNotes(event) {
        event.preventDefault();
        document.getElementById("features-notes").scrollIntoView({ "behavior": "smooth", "block": "start" });
    }

    return (
        <React.Fragment>
            <section className="section" id="features">
                <div className="container">
                    <p className="title is-3 has-text-centered">Features</p>
                    <p className="subtitle is-5 has-text-centered">{props.features.length} features <a href="#features-notes" onClick={scrollToNotes}>*</a></p>
                    <div className="columns is-vcentered is-centered is-mobile is-multiline">
                        <div className="column is-4-mobile is-1-tablet has-text-centered">
                            <p className="title is-5">ID</p>
                        </div>
                        <div className="column is-8-mobile is-4-tablet">
                            <p className="title is-5">Name / Description</p>
                        </div>
                        <div className="column has-text-centered">
                            <p className="title is-5">Supported? <span className="tag is-success mr-3">YES</span><span className="tag is-warning mr-3">PARTIALLY</span><span className="tag is-danger mr-3">NO</span></p>
                        </div>
                    </div>
                    {props.features.map(item =>
                        <Feature key={item.id} item={item} />
                    )}
                </div>
            </section>
        </React.Fragment>
    );
}
