import React from 'react';

export default function FontsSupport(props) {
    return (
        <React.Fragment>
            {props.value === true ?
                <span className="tag is-success">YES</span>
                :
                <span className="tag is-warning">NO</span>
            }
        </React.Fragment>
    );
}
