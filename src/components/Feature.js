import React from 'react';
import FeatureSupport from './FeatureSupport';

export default function Feature(props) {
    return (
        <React.Fragment>
            <div className="columns is-vcentered is-centered is-mobile is-multiline" id={"item-" + props.item.id}>
                <div className="column is-4-mobile is-1-tablet has-text-centered">
                    <a href={"/browser-dashboard/?id=" + props.item.id}>{props.item.id}</a>
                </div>
                <div className="column is-8-mobile is-3-tablet">
                    <a href={"https://caniuse.com/#feat=" + props.item.name}>{props.item.name}</a>
                    <br />
                    <p className="subtitle is-7">{props.item.title}</p>
                </div>
                <div className="column has-text-centered">
                    <FeatureSupport name={props.item.name} stats={props.item.stats} notes_by_num={props.item.notes_by_num} />
                </div>
            </div>
        </React.Fragment>
    );
}
