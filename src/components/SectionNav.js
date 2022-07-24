import React from "react";

export default function SectionNav(props) {
  function scrollToSection(event) {
    event.preventDefault();
    let navId = props.navType === "bottom" ? "bottom-menu" : "header-menu";
    Array.from(document.getElementById(navId).children).forEach((element) => {
      element.className = "navbar-item";
    });
    event.currentTarget.className += " is-active";
    document
      .getElementById(event.currentTarget.innerText.toLowerCase())
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <React.Fragment>
      <nav className="navbar is-spaced navbar-items-centered">
        <div
          className="navbar-menu is-active"
          id={props.navType === "bottom" ? "bottom-menu" : "header-menu"}
        >
          <a className="navbar-item" href="#specs" onClick={scrollToSection}>
            Specs
          </a>
          <a className="navbar-item" href="#plugins" onClick={scrollToSection}>
            Plugins
          </a>
          <a className="navbar-item" href="#features" onClick={scrollToSection}>
            Fonts
          </a>
          <a className="navbar-item" href="#fonts" onClick={scrollToSection}>
            Features
          </a>
          {props.topLinkVisible && (
            <a className="navbar-item" href="#top" onClick={scrollToSection}>
              TOP
            </a>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
}
