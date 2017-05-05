import React from 'react';

import { Expander, Panel } from './expander.js';
import ReactMarkdown from "react-markdown";

var items = [
  {
    source: require(`../../markdown/faq/item-1.md`),
    header: `Who can enter the Challenges?`
  }, {
    source: require(`../../markdown/faq/item-2.md`),
    header: `Who cannot enter the Challenges?`
  }, {
    source: require(`../../markdown/faq/item-3.md`),
    header: `Can a single entrant enter more than one Challenge?`
  }, {
    source: require(`../../markdown/faq/item-4.md`),
    header: `Are entrants expected to develop everything from scratch, or may entrants utilize existing technologies when building prototypes?`
  }, {
    source: require(`../../markdown/faq/item-5.md`),
    header: `Do I need to submit to the Design Concept stage of a Challenge in order to submit to the Working Prototype stage of that Challenge?`
  }, {
    source: require(`../../markdown/faq/item-6.md`),
    header: `Can I test my prototype using real city infrastructure?`
  }, {
    source: require(`../../markdown/faq/item-7.md`),
    header: `Can I submit a partial solution to the Challenges (e.g., an app that can be useful in a disaster situation)?`
  }, {
    source: require(`../../markdown/faq/item-8.md`),
    header: `If I submit confidential or proprietary information to the Challenges, will Mozilla honor the confidentiality of that information?`
  }, {
    source: require(`../../markdown/faq/item-9.md`),
    header: `What is meant by public documentation and open source licensing?`
  }
];

var Faq = React.createClass({
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
    var activeLink = document.querySelector(`.menu-link.active`);

    if (key) {
      hash = `#` + key;
    } else if (activeLink) {
      hash = activeLink.getAttribute(`href`);
    }
    history.replaceState({}, ``, window.location.origin + window.location.pathname + window.location.search + hash);
    this.updateKey(key);
  },
  componentDidUpdate: function() {
    this.updateKey(window.location.hash.replace(`#`, ``));
  },
  componentDidMount: function() {
    this.updateKey(window.location.hash.replace(`#`, ``));
    window.addEventListener(`hashchange`, this.hashChange);
  },
  componentWillUnmount: function() {
    window.removeEventListener(`hashchange`, this.hashChange);
  },
  hashChange: function() {
    this.updateKey(window.location.hash.replace(`#`, ``));
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
                <div className="markdown">
                  <ReactMarkdown source={item.source}/>
                </div>
              </Panel>
            );
          })
        }
      </Expander>
    );
  }
});

module.exports = Faq;
