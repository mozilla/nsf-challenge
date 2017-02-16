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
  propTypes: {
    children: React.PropTypes.any.isRequired,
    itemKey: React.PropTypes.string.isRequired,
    activeKey: React.PropTypes.string.isRequired,
    header: React.PropTypes.string.isRequired
  },
  onClick: function() {
    var itemKey = this.props.itemKey;

    if (itemKey === this.props.activeKey) {
      itemKey = ``;
    }
    this.props.activateKey(itemKey);
  },
  setHeight: function() {
    var expanded = this.props.itemKey === this.props.activeKey;
    var height = `0`;

    if (this.content && expanded) {
      height = this.content.offsetHeight + `px`;
    }
    this.container.style.height = height;
  },
  componentDidUpdate: function() {
    this.setHeight();
  },
  componentDidMount: function() {
    this.setHeight();
    document.addEventListener(`resize`, this.setHeight);
  },
  componentWillUnmount: function() {
    document.removeEventListener(`resize`, this.setHeight);
  },
  render: function() {
    var itemClassName = classnames(`expander-item`, {
      "expander-item-active": this.props.itemKey === this.props.activeKey
    });

    return (
      <div className={itemClassName}>
        <div id={this.props.itemKey} className="nav-anchor"></div>
        <div onClick={this.onClick} className="expander-header">{this.props.header}</div>
        <div ref={(element) => { this.container = element; }} className="expander-content">
          <div ref={(element) => { this.content = element; }}>
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
