var React = require(`react`);

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
    var itemClassName = "expander-item";
    var contentClassName = "expander-content";
    if (this.props.itemKey === this.props.activeKey) {
      itemClassName += " expander-item-active";
      contentClassName += " expander-content-active";
    }
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
