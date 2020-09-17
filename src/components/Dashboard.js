import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderSection from './HeaderSection';
import SearchResultsSection from './SearchResultsSection';
import SpecsSection from './SpecsSection';
import PluginsSection from './PluginsSection';
import FontsSection from './FontsSection';
import FeaturesSection from './FeaturesSection';
import NotesSection from './NotesSection';
import BottomSection from './BottomSection';
import { GetFeatures } from './../ext-data/load'
import { GetSpecs, GetPlugins, GetFonts } from '../data/detect';

// Specs
let specs = GetSpecs();

// Plugins
const pluginsStartIdx = 33;
let plugins = GetPlugins(pluginsStartIdx);

// Fonts
const fontsStartIdx = pluginsStartIdx + 1;
let fonts = GetFonts(fontsStartIdx);

// Features
let featuresStartIdx = fonts.length + fontsStartIdx;
let features = GetFeatures(featuresStartIdx);

export function GetQuery() {
  return new URLSearchParams(useLocation().search);
}

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "searchTerm": "",
      "searchTermNote": "",
      "searchResults": [],
    };

    document.title = "Browser Dashboard";

    this.headerRef = React.createRef();

    this.searchTermRef = React.createRef();

    this.handleSearchByKey = this.handleSearchByKey.bind(this);
    this.handleSearchByClick = this.handleSearchByClick.bind(this);

    this.search = this.search.bind(this);
  }

  handleSearchByKey(event) {
    if (event.keyCode !== 13 && event.key !== "Enter") {
      return;
    }

    const searchTerm = this.searchTermRef.current.value;

    this.setState(prevState => ({
      ...prevState,
      searchTerm: searchTerm,
    }));

    if (searchTerm === "") {
      this.headerRef.current.className = "hero is-success is-medium has-text-centered";
    } else {
      this.headerRef.current.className = "hero is-success has-text-centered";
      this.search(searchTerm);
    }
  }

  handleSearchByClick() {
    const searchTerm = this.searchTermRef.current.value;
    if (searchTerm === "") {
      this.headerRef.current.className = "hero is-success is-medium has-text-centered";
    } else {
      this.headerRef.current.className = "hero is-success has-text-centered";
      this.setState(prevState => ({
        ...prevState,
        searchTerm: searchTerm,
      }));
      this.search(searchTerm);
    }
  }

  search(searchTerm) {
    let searchTermNote = "";
    let searchResults = [];
    let searchID = parseInt(searchTerm);
    if (!isNaN(searchID) && searchID !== undefined) {
      if (0 < searchID && searchID <= specs.length) {
        let item = specs[searchID - 1];
        searchResults.push({
          "id": item.id,
          "value": item,
          "type": "spec",
        });
      } else if (searchID === pluginsStartIdx) {
        plugins.forEach(item => {
          searchResults.push({
            "id": item.id,
            "value": item,
            "type": "plugin",
          });
        });
      } else if (pluginsStartIdx < searchID && searchID < (fonts.length + fontsStartIdx)) {
        let item = fonts[searchID - fontsStartIdx];
        searchResults.push({
          "id": item.id,
          "value": item,
          "type": "font",
        });
      } else if (featuresStartIdx <= searchID && searchID < (features.length + featuresStartIdx)) {
        let item = features[searchID - featuresStartIdx];
        searchResults.push({
          "id": (searchID - featuresStartIdx) + 1,
          "value": item,
          "type": "feature",
        });
      } else {
        searchTermNote = "Invalid ID provided. Please provide value between 1 and " + String(features.length + featuresStartIdx);
      }
    } else if (searchTerm.length < 3) {
      searchTermNote = "Search term needs to be ID(number) OR text with at least 3 characters.";
    } else {
      [[specs, "spec"], [plugins, "plugin"], [fonts, "font"], [features, "feature"]].forEach(source => {
        source[0].filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1).forEach(item => {
          searchResults.push({
            "id": item.id,
            "value": item,
            "type": source[1],
          });
        });
      });
    }

    this.setState(prevState => ({
      ...prevState,
      searchTermNote: searchTermNote,
      searchResults: searchResults,
    }));

    const searchResultsElement = document.getElementById("search-results");
    if (searchResultsElement !== null) {
      searchResultsElement.scrollIntoView({ "behavior": "smooth", "block": "start" });
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(window.location.search);
    let searchTerm = "";
    if (query.has('id')) {
      searchTerm = query.get('id');
    } else if (query.has('name')) {
      searchTerm = query.get('name');
    }

    if (searchTerm !== "") {
      this.headerRef.current.className = "hero is-success has-text-centered";
      this.setState(prevState => ({
        ...prevState,
        searchTerm: searchTerm,
      }), () => {
        this.search(searchTerm);
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeaderSection
          headerRef={this.headerRef}
          searchTermRef={this.searchTermRef}
          searchTerm={this.state.searchTerm}
          searchTermNote={this.state.searchTermNote}
          handleSearchByKey={this.handleSearchByKey}
          handleSearchByClick={this.handleSearchByClick} />
        {this.state.searchTerm &&
          <SearchResultsSection
            items={this.state.searchResults}
            searchTermNote={this.state.searchTermNote}
            pluginsStartIdx={pluginsStartIdx} />
        }
        <SpecsSection
          specs={specs} />
        <PluginsSection
          plugins={plugins}
          startIdx={pluginsStartIdx} />
        <FontsSection fonts={fonts} />
        <FeaturesSection
          startIdx={featuresStartIdx}
          features={features} />
        <NotesSection />
        <BottomSection />
      </React.Fragment>
    );
  }
}
