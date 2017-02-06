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
      itemKey = ``;
    }
    this.props.activateKey(itemKey);
  },
  render: function() {
    var expanded = this.props.itemKey === this.props.activeKey;
    var style = {
      height: `0`
    };
    var itemClassName = classnames(`expander-item`, {
      "expander-item-active": expanded
    });
    if (this.content && expanded) {
      style.height = this.content.offsetHeight + `px`;
    }
    return (
      <div id={this.props.itemKey} className={itemClassName}>
        <div onClick={this.onClick} className="expander-header">{this.props.header}</div>
        <div className="expander-content" style={style}>
          <div ref={(element) => {this.content = element;}}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  Expander,
  Panel
};
