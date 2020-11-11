import React from 'react';
import Spec from './Spec';

export default function SpecsSection(props) {
    return (
        <React.Fragment>
            <section className="section" id="specs">
                <div className="container">
                    <p className="title is-3 has-text-weight-light has-text-centered">Specs</p>
                    <div className="columns is-vcentered is-centered is-mobile is-multiline">
                        <div className="column is-4-mobile is-1-tablet has-text-centered">
                            <p className="title is-5">ID</p>
                        </div>
                        <div className="column is-8-mobile is-4-tablet has-text-centered-mobile">
                            <p className="title is-5">Name</p>
                        </div>
                        <div className="column has-text-centered-mobile">
                            <p className="title is-5">Value</p>
                        </div>
                    </div>
                    {Array.from(props.specs).map(item =>
                        <Spec key={item.id} item={item} />
                    )}
                </div>
            </section>
        </React.Fragment>
    );
}
