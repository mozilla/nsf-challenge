var React = require(`react`);
import challenge1 from "../../markdown/challenges/challenge-1.md";
import challenge2 from "../../markdown/challenges/challenge-2.md";
import ReactMarkdown from "react-markdown";

var TabButton = React.createClass({
  render: function() {
    return (
      <button className="challenges-button">{this.props.children}</button>
    );
  }
});

var TabContent = React.createClass({
  render: function() {
    return (
      <div className="challenges-content">{this.props.children}</div>
    );
  }
});

var Challenges = React.createClass({
  render: function() {
    return (
      <div className="challenges">
        <div className="challenges-switcher">
          <TabButton>Challenge 1</TabButton>
          <TabButton>Challenge 2</TabButton>
        </div>
        <TabContent>
          <ReactMarkdown source={challenge1}/>
        </TabContent>
        <TabContent>
          <ReactMarkdown source={challenge2}/>
        </TabContent>
      </div>
    );
  }
});

module.exports = Challenges;
