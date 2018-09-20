import React from 'react';
import winners1 from "../../markdown/winners/winners-1.md";
import winners2 from "../../markdown/winners/winners-2.md";
import grandWinners1 from "../../markdown/winners/grand-winners-1.md";
import grandWinners2 from "../../markdown/winners/grand-winners-2.md";
import ReactMarkdown from "react-markdown";
import classnames from "classnames";

var TabButton = React.createClass({
  onClick: function() {
    this.props.activateTab(this.props.tabIndex);
  },
  render: function() {
    var className = classnames(`switcher-button`, {
      "active": this.props.activeTab === this.props.tabIndex
    });

    return (
      <div className="switcher-button-container">
        <div className="nav-offset" id={this.props.tabIndex}></div>
        <a href={`#` + this.props.tabIndex} onClick={this.onClick} className={className}>{this.props.children}</a>
      </div>
    );
  }
});

var TabContent = React.createClass({
  render: function() {
    var className = classnames(`switcher-content`, {
      "hidden": this.props.activeTab !== this.props.tabIndex
    });

    return (
      <div className={className}>{this.props.children}</div>
    );
  }
});

var Winners = React.createClass({
  getInitialState: function() {
    return {
      activeTab: `${this.props.round}winners-1`
    };
  },
  activateTab: function(tab) {
    if (tab !== this.state.activeTab) {
      if (tab === `${this.props.round}winners-1` || tab === `${this.props.round}winners-2`) {
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
    let winnerRound = this.props.round;
    let markdownSource1 = winners1;
    let markdownSource2 = winners2;

    if(winnerRound === `grand-`){
      markdownSource1= grandWinners1;
      markdownSource2= grandWinners2;
    }

    return (
      <div className="switcher">
        <div className="switcher-item">
          <TabButton activateTab={this.updateHash} activeTab={this.state.activeTab} tabIndex={`${winnerRound}winners-1`}>Challenge 1</TabButton>
          <TabButton activateTab={this.updateHash} activeTab={this.state.activeTab} tabIndex={`${winnerRound}winners-2`}>Challenge 2</TabButton>
        </div>
        <TabContent activeTab={this.state.activeTab} tabIndex={`${winnerRound}winners-1`}>
          <div className="markdown">
            <ReactMarkdown source={markdownSource1}/>
          </div>
        </TabContent>
        <TabContent activeTab={this.state.activeTab} tabIndex={`${winnerRound}winners-2`}>
          <div className="markdown">
            <ReactMarkdown source={markdownSource2}/>
          </div>
        </TabContent>
      </div>
    );
  }
});

module.exports = Winners;
