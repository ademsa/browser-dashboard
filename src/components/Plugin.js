import React from "react";

export default function Plugin(props) {
  return (
    <React.Fragment>
      <div
        className="columns is-vcentered is-centered is-mobile is-multiline"
        id={"item-" + props.startIdx}
      >
        <div className="column is-2-mobile is-1-tablet has-text-centered">
          <a href={"/browser-dashboard/?id=" + props.startIdx}>
            {props.startIdx}
          </a>
        </div>
        <div className="column is-10-mobile is-4-tablet has-text-left-mobile">
          {props.item.name}
        </div>
        <div className="column is-12-mobile has-text-right-mobile">
          {props.item.filename} {props.item.version}
        </div>
      </div>
    </React.Fragment>
  );
}
