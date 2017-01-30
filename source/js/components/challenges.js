var React = require(`react`);
import challenge1 from "../../markdown/challenges/challenge-1.md";
import challenge2 from "../../markdown/challenges/challenge-2.md";
import ReactMarkdown from "react-markdown";

var TabButton = React.createClass({
  onClick: function() {
    this.props.activateTab(this.props.tabIndex);
  },
  render: function() {
    var className = "challenges-button";
    if (this.props.activeTab === this.props.tabIndex) {
      className += " active";
    }
    return (
      <button onClick={this.onClick} className={className}>{this.props.children}</button>
    );
  }
});

var TabContent = React.createClass({
  render: function() {
    var className = "challenges-content";
    if (this.props.activeTab !== this.props.tabIndex) {
      className += " hidden";
    }
    return (
      <div className={className}>{this.props.children}</div>
    );
  }
});

var Challenges = React.createClass({
  getInitialState: function() {
    return {
      activeTab: 1
    }
  },
  activateTab: function(tab) {
    if (tab !== this.state.activeTab) {
      this.setState({
        activeTab: tab
      });
    }
  },
  render: function() {
    return (
      <div className="challenges">
        <div className="challenges-switcher">
          <TabButton activateTab={this.activateTab} activeTab={this.state.activeTab} tabIndex={1}>Challenge 1</TabButton>
          <TabButton activateTab={this.activateTab} activeTab={this.state.activeTab} tabIndex={2}>Challenge 2</TabButton>
        </div>
        <TabContent activeTab={this.state.activeTab} tabIndex={1}>
          <ReactMarkdown source={challenge1}/>
        </TabContent>
        <TabContent activeTab={this.state.activeTab} tabIndex={2}>
          <ReactMarkdown source={challenge2}/>
        </TabContent>
      </div>
    );
  }
});

module.exports = Challenges;
