import React from 'react';
import SectionNav from './SectionNav';

export default function BottomSection() {
    return (
        <React.Fragment>
            <section className="hero is-success has-text-centered">
                <div className="hero-head">
                    <SectionNav navType="bottom" topLinkVisible="true" />
                </div>
            </section>
        </React.Fragment>
    );
}
