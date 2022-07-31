import React from "react";
import FontSupport from "./FontSupport";

export default function Font(props) {
  return (
    <React.Fragment>
      <div
        className="columns is-vcentered is-centered is-mobile is-multiline"
        id={"item-" + props.item.id}
      >
        <div className="column is-2-mobile is-1-tablet has-text-centered">
          <a href={"/browser-dashboard/?id=" + props.item.id}>
            {props.item.id}
          </a>
        </div>
        <div className="column is-6-mobile is-4-tablet">{props.item.name}</div>
        <div className="column has-text-centered-mobile">
          <FontSupport value={props.item.available} />
        </div>
      </div>
    </React.Fragment>
  );
}
