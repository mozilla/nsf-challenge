import React from 'react';

import { Expander, Panel } from './expander.js';
import ReactMarkdown from "react-markdown";

var items = [
  {
    source: require("../../markdown/details/item-1.md"),
    header: "How to enter the challenge"
  }, {
    source: require("../../markdown/details/item-2.md"),
    header: "Timeline"
  }, {
    source: require("../../markdown/details/item-3.md"),
    header: "Judging"
  }, {
    source: require("../../markdown/details/item-4.md"),
    header: "Eligibility requirements"
  }, {
    source: require("../../markdown/details/item-5.md"),
    header: "Information on teams"
  }, {
    source: require("../../markdown/details/item-6.md"),
    header: "Challenge rules"
  }, {
    source: require("../../markdown/details/item-7.md"),
    header: "FAQ"
  }, {
    source: require("../../markdown/details/item-8.md"),
    header: "Getting Started"
  },
];

var Details = React.createClass({
  getInitialState: function() {
    return {
      activeKey: ""
    };
  },
  onKeyChange: function(key) {
    if (key !== this.state.activeKey) {
      this.setState({
        activeKey: key
      });
    }
  },
  render: function() {
    return (
      <Expander>
        {
          items.map((item, index) => {
            return (
              <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey={"item-" + index} header={item.header}>
                <ReactMarkdown source={item.source}/>
              </Panel>
            );
          })
        }
      </Expander>
    );
  }
});

module.exports = Details;
