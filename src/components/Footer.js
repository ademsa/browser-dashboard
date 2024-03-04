import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="footer py-5">
        <div className="content has-text-centered grey-light">
          <p className="has-text-weight-light my-0 is-size-7">
            Source code available{" "}
            <a href="https://github.com/ademsa/browser-dashboard">here</a> (
            <a href="https://github.com/ademsa/browser-dashboard/blob/master/LICENSE.md">
              MIT license
            </a>
            ).
            <br />
            Hosted on <a href="https://pages.github.com/">GitHub Pages</a>
          </p>
          <br />
          <a className="mt-2" href="https://ademsabic.com">
            <img
              className="author"
              src="/browser-dashboard/author.svg"
              alt="Author"
            />
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}
