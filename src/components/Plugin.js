import React from 'react';

export default function Plugin(props) {
    return (
        <React.Fragment>
            <div className="columns is-vcentered is-centered is-mobile is-multiline" id={"item-" + props.startIdx}>
                <div className="column is-2-mobile is-1-tablet has-text-centered">
                    <a href={"/browser-dashboard/?id=" + props.startIdx}>{props.startIdx}</a>
                </div>
                <div className="column is-6-mobile is-3-tablet has-text-centered-mobile">
                    {props.item.name}
                </div>
                <div className="column has-text-centered-mobile">
                    {props.item.filename} {props.item.version}
                </div>
            </div>
        </React.Fragment>
    );
}
