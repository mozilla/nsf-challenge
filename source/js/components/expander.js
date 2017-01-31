import React from 'react';
import classnames from "classnames";

var Expander = React.createClass({
  render: function() {
    return (
      <div className="expander">
        {this.props.children}
      </div>
    );
  }
});

var Panel = React.createClass({
  onClick: function() {
    var itemKey = this.props.itemKey;
    if (itemKey === this.props.activeKey) {
      itemKey = "";
    }
    this.props.activateKey(itemKey);
  },
  render: function() {
    var itemClassName = classnames("expander-item", {
      "expander-item-active": this.props.itemKey === this.props.activeKey
    });
    var contentClassName = classnames("expander-content", {
      "expander-content-active": this.props.itemKey === this.props.activeKey
    });
    return (
      <div id={this.props.itemKey} className={itemClassName}>
        <div onClick={this.onClick} className="expander-header">{this.props.header}</div>
        <div className={contentClassName}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = {
  Expander,
  Panel
};
