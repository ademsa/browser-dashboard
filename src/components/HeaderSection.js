import React from "react";
import SectionNav from "./SectionNav";

export default function HeaderSection(props) {
  return (
    <React.Fragment>
      <section
        className="hero is-success is-medium has-text-centered"
        ref={props.headerRef}
      >
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered is-dektop">
              <div className="column is-offset-1-desktop is-4-desktop">
                <p className="title is-1">
                  Get to know
                  <br />
                  your browser.
                </p>
                <p className="subtitle is-5">
                  All detected specs, plugins, fonts and features in one place.
                  Sorted and Searchable.
                </p>
              </div>
              <div className="column is-offset-1-desktop is-6-desktop">
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input
                      className="input is-focused is-rounded is-large is-warning"
                      ref={props.searchTermRef}
                      defaultValue={props.searchTerm}
                      onKeyDown={props.handleSearchByKey}
                      placeholder="Name or ID..."
                    />
                  </div>
                  <div className="control">
                    <button
                      className="button is-warning is-rounded is-large"
                      onClick={props.handleSearchByClick}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <SectionNav navType="header" />
        </div>
      </section>
    </React.Fragment>
  );
}
