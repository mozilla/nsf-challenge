var React = require(`react`);

import { Expander, Panel } from './expander.js';
import item1 from "../../markdown/details/item-1.md";
import item2 from "../../markdown/details/item-2.md";
import item3 from "../../markdown/details/item-3.md";
import item4 from "../../markdown/details/item-4.md";
import item5 from "../../markdown/details/item-5.md";
import item6 from "../../markdown/details/item-6.md";
import item7 from "../../markdown/details/item-7.md";
import item8 from "../../markdown/details/item-8.md";
import ReactMarkdown from "react-markdown";

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
        <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey="item-1" header="How to enter the challenge">
          <ReactMarkdown source={item1}/>
        </Panel>
        <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey="item-2" header="Timeline">
          <ReactMarkdown source={item2}/>
        </Panel>
        <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey="item-3" header="Judging">
          <ReactMarkdown source={item3}/>
        </Panel>
        <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey="item-4" header="Eligibility requirements">
          <ReactMarkdown source={item4}/>
        </Panel>
        <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey="item-5" header="Information on teams">
          <ReactMarkdown source={item5}/>
        </Panel>
        <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey="item-6" header="Challenge rules">
          <ReactMarkdown source={item6}/>
        </Panel>
        <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey="item-7" header="FAQ">
          <ReactMarkdown source={item7}/>
        </Panel>
        <Panel activeKey={this.state.activeKey} activateKey={this.onKeyChange} itemKey="item-8" header="Getting Started">
          <ReactMarkdown source={item8}/>
        </Panel>
      </Expander>
    );
  }
});

module.exports = Details;
