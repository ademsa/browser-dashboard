import React from 'react';

export default function FeatureSupportPerBrowser(props) {
    return (
        <React.Fragment>
            <p>{props.browser}</p>
            {Object.entries(props.browserStats).map(([key, value]) =>
                value[1] === 'y' ?
                    <span key={key} className="tag is-success mr-3 mb-1 is-block-mobile">{value[0]}</span>
                    :
                    value[1] === 'n' ?
                        <span key={key} className="tag is-danger mr-3 mb-1 is-block-mobile">{value[0]}</span>
                        :
                        <span key={key} className="tag is-warning mr-3 mb-1 is-block-mobile">{value[0]}</span>

            )}
        </React.Fragment>
    );
}
