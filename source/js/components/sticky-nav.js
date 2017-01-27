var React = require(`react`);

import StickyContainer from './sticky-container.js';

var StickyNav = React.createClass({
  getInitialState: function() {
    return {
      active: window.location.hash.replace("#", "") || ""
    };
  },
  render: function() {
    var active = this.state.active;
    return (
      <StickyContainer className="sticky-container" stickyFrom={() => 600}>
        <div className="container">
          <a className={active === "about" ? "active" : ""} href="#about">About</a>
          <a className={active === "events" ? "active" : ""} href="#events">Events</a>
          <a className={active === "details" ? "active" : ""} href="#details">Details</a>
        </div>
      </StickyContainer>
    );
  }
});

module.exports = StickyNav;
