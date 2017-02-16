import React from 'react';

import { Expander, Panel } from './expander.js';
import ReactMarkdown from "react-markdown";

var items = [
  {
    source: require(`../../markdown/details/item-1.md`),
    header: `Who can enter the challenges`
  }, {
    source: require(`../../markdown/details/item-2.md`),
    header: `What to submit`
  }, {
    source: require(`../../markdown/details/item-3.md`),
    header: `Timeline`
  }, {
    source: require(`../../markdown/details/item-4.md`),
    header: `Judging and awards`
  }, {
    source: require(`../../markdown/details/item-5.md`),
    header: `Information on teams`
  }, {
    source: require(`../../markdown/details/item-6.md`),
    header: `FAQ`
  }, {
    source: require(`../../markdown/details/item-7.md`),
    header: `Getting Started`
  }
];

var Details = React.createClass({
  getInitialState: function() {
    return {
      activeKey: ``
    };
  },
  updateKey: function(newActiveKey) {
    if (newActiveKey !== this.state.activeKey) {
      this.setState({
        activeKey: newActiveKey
      });
    }
  },
  updateHash: function(key) {
    var hash = ``;
    if (key) {
      hash = `#` + key;
    }
    history.replaceState({}, ``, window.location.origin + window.location.pathname + window.location.search + hash);
    this.updateKey(key);
  },
  componentDidUpdate: function() {
    this.updateKey(window.location.hash.replace(`#`, ``));
  },
  componentDidMount: function() {
    this.updateKey(window.location.hash.replace(`#`, `));
  },
  onKeyChange: function(key) {
    this.updateHash(key);
  },
  render: function() {
    return (
      <Expander>
        {
          items.map((item, index) => {
            return (
              <Panel key={index} activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey={`item-` + index} header={item.header}>
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
