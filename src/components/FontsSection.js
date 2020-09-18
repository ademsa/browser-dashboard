import React from 'react';
import Font from './Font';

export default function FontsSection(props) {
    function scrollToNotes(event) {
        event.preventDefault();
        document.getElementById("fonts-notes").scrollIntoView({ "behavior": "smooth", "block": "start" });
    }

    return (
        <React.Fragment>
            <section className="section" id="fonts">
                <div className="container">
                    <p className="title is-3 has-text-centered">Fonts</p>
                    <p className="subtitle is-6 has-text-centered">
                        {props.fonts.length} fonts <a href="#fonts-notes" onClick={scrollToNotes}>*</a>
                    </p>
                    <div className="columns is-vcentered is-centered is-mobile is-multiline">
                        <div className="column is-2-mobile is-1-tablet has-text-centered">
                            <p className="title is-5">ID</p>
                        </div>
                        <div className="column is-8-mobile is-4-tablet">
                            <p className="title is-5">Name</p>
                        </div>
                        <div className="column has-text-centered-mobile">
                            <p className="title is-5">Available ?</p>
                        </div>
                    </div>
                    {props.fonts.map(item =>
                        <Font key={item.id} item={item} />
                    )}
                </div>
            </section>
        </React.Fragment>
    );
}
