import React from 'react';

export default function Spec(props) {
    return (
        <React.Fragment>
            <div className="columns is-vcentered is-centered is-mobile is-multiline" id={"item-" + props.item.id}>
                <div className="column is-4-mobile is-1-tablet has-text-centered">
                    <a href={"/browser-dashboard/dashboard?id=" + props.item.id}>{props.item.id}</a>
                </div>
                <div className="column is-8-mobile is-3-tablet has-text-centered-mobile">
                    <a href={props.item.descriptionUrl} target="_blank" rel="noopener noreferrer">{props.item.name}</a>
                </div>
                <div className="column has-text-centered-mobile">
                    {props.item.valueType === "boolean" ?
                        props.item.value === "true" ?
                            <span className="tag is-success">YES</span>
                            :
                            <span className="tag is-warning">NO</span>
                        :
                        props.item.valueType === "array" ?
                            props.item.value.map(valueItem =>
                                <span key={valueItem} className="tag is-success mr-3">{valueItem}</span>
                            )
                            :
                            props.item.value
                    }
                </div>
            </div>
        </React.Fragment>
    );
}
