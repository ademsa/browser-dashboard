import React from "react";
import FeatureSupportPerBrowser from "./FeatureSupportPerBrowser";

export default function FeatureSupport(props) {
  return (
    <React.Fragment>
      {(navigator.userAgent.indexOf("Firefox") > -1 ||
        navigator.userAgent.indexOf("FxiOS") > -1 ||
        navigator.userAgent.indexOf("Focus") > -1) && (
        <div className="columns is-vcentered is-mobile is-multiline">
          <div className="column is-6 has-text-centered">
            <FeatureSupportPerBrowser
              browser="Firefox"
              browserStats={props.stats.firefox}
            />
          </div>
          <div className="column is-6 has-text-centered">
            <FeatureSupportPerBrowser
              browser="Firefox for Android"
              browserStats={props.stats.and_ff}
            />
          </div>
          <div className="column is-12 has-text-centered">
            <a href={"https://caniuse.com/#feat=" + props.name}>
              Other browsers
            </a>
          </div>
        </div>
      )}
      {navigator.userAgent.indexOf("Chrome") > -1 && (
        <div className="columns is-vcentered is-mobile is-multiline">
          <div className="column is-6-mobile is-5-tablet has-text-centered">
            <FeatureSupportPerBrowser
              browser="Chrome"
              browserStats={props.stats.chrome}
            />
          </div>
          <div className="column is-6-mobile is-5-tablet has-text-centered">
            <FeatureSupportPerBrowser
              browser="Chrome for Android"
              browserStats={props.stats.and_chr}
            />
          </div>
          <div className="column is-12-mobile is-narrow-tablet has-text-centered">
            <a href={"https://caniuse.com/#feat=" + props.name}>
              Other browsers
            </a>
          </div>
        </div>
      )}
      {navigator.userAgent.indexOf("Edge") > -1 && (
        <div className="columns is-vcentered is-mobile is-multiline">
          <div className="column is-12-mobile is-10-tablet has-text-centered">
            <FeatureSupportPerBrowser
              browser="Edge"
              browserStats={props.stats.edge}
            />
          </div>
          <div className="column is-12-mobile is-narrow-tablet has-text-centered">
            <a href={"https://caniuse.com/#feat=" + props.name}>
              Other browsers
            </a>
          </div>
        </div>
      )}
      {navigator.userAgent.indexOf("Safari") > -1 && (
        <div className="columns is-vcentered is-mobile is-multiline">
          <div className="column is-6-mobile is-5-tablet has-text-centered">
            <FeatureSupportPerBrowser
              browser="Safari"
              browserStats={props.stats.safari}
            />
          </div>
          <div className="column is-6-mobile is-5-tablet has-text-centered">
            <FeatureSupportPerBrowser
              browser="Safari for iOS"
              browserStats={props.stats.ios_saf}
            />
          </div>
          <div className="column is-12-mobile is-narrow-tablet has-text-centered">
            <a href={"https://caniuse.com/#feat=" + props.name}>
              Other browsers
            </a>
          </div>
        </div>
      )}
      {Object.entries(props.notes_by_num).length > 0 && (
        <div className="has-text-centered">
          <p className="title is-6 mb-2">Notes</p>
          {Object.entries(props.notes_by_num).map(([key, value]) => (
            <p key={key} className="subtitle is-7 my-1">
              {value}
            </p>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
