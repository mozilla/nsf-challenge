import React from 'react';
import challenge1 from "../../markdown/challenges/challenge-1.md";
import challenge2 from "../../markdown/challenges/challenge-2.md";
import ReactMarkdown from "react-markdown";
import classnames from "classnames";

var TabButton = React.createClass({
  onClick: function() {
    this.props.activateTab(this.props.tabIndex);
  },
  render: function() {
    var className = classnames(`challenges-button`, {
      "active": this.props.activeTab === this.props.tabIndex
    });

    return (
      <div className="challenge-button-container">
        <div className="nav-offset" id={this.props.tabIndex}></div>
        <a href={`#` + this.props.tabIndex} onClick={this.onClick} className={className}>{this.props.children}</a>
      </div>
    );
  }
});

var TabContent = React.createClass({
  render: function() {
    var className = classnames(`challenges-content`, {
      "hidden": this.props.activeTab !== this.props.tabIndex
    });

    return (
      <div className={className}>{this.props.children}</div>
    );
  }
});

var Challenges = React.createClass({
  getInitialState: function() {
    return {
      activeTab: `challenge-1`
    };
  },
  activateTab: function(tab) {
    if (tab !== this.state.activeTab) {
      if (tab === `challenge-1` || tab === `challenge-2`) {
        this.setState({
          activeTab: tab
        });
      }
    }
  },
  updateHash: function(key) {
    var hash = ``;
    var activeLink = document.querySelector(`.menu-link.active`);

    if (key) {
      hash = `#` + key;
    } else if (activeLink) {
      hash = activeLink.getAttribute(`href`);
    }
    history.replaceState({}, ``, window.location.origin + window.location.pathname + window.location.search + hash);
    this.activateTab(key);
  },
  componentDidUpdate: function() {
    this.activateTab(window.location.hash.replace(`#`, ``));
  },
  componentDidMount: function() {
    this.activateTab(window.location.hash.replace(`#`, ``));
  },
  render: function() {
    return (
      <div className="challenges">
        <div className="challenges-switcher">
          <TabButton activateTab={this.updateHash} activeTab={this.state.activeTab} tabIndex="challenge-1">Challenge 1</TabButton>
          <TabButton activateTab={this.updateHash} activeTab={this.state.activeTab} tabIndex="challenge-2">Challenge 2</TabButton>
        </div>
        <TabContent activeTab={this.state.activeTab} tabIndex="challenge-1">
          <div className="markdown">
            <ReactMarkdown source={challenge1}/>
          </div>
        </TabContent>
        <TabContent activeTab={this.state.activeTab} tabIndex="challenge-2">
          <div className="markdown">
            <ReactMarkdown source={challenge2}/>
          </div>
        </TabContent>
      </div>
    );
  }
});

module.exports = Challenges;
