import React from 'react';
import classnames from "classnames";

import StickyContainer from './sticky-container.js';

var MenuLink = React.createClass({
  onClick: function() {
    this.props.activate(this.props.item);
  },
  render: function() {
    var className = classnames({
      "active": this.props.active === this.props.item
    });

    return (
      <a className={className} onClick={this.onClick} href={this.props.href}>{this.props.children}</a>
    );
  }
});

var StickyNav = React.createClass({
  getInitialState: function() {
    return {
      active: window.location.hash.replace(`#`, ``) || ``
    };
  },
  componentDidMount: function() {
    document.addEventListener(`scroll`, this.onScroll);
  },
  componentWillUnmount: function() {
    document.removeEventListener(`scroll`, this.onScroll);
  },
  onScroll: function() {
    var active = `about`;
    var scrollY = window.scrollY;
    var events = document.querySelector(`#events`);
    var details = document.querySelector(`#details`);

    if (scrollY >= events.offsetTop) {
      active = `events`;
    }
    if (scrollY >= details.offsetTop || (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      active = `details`;
    }
    this.activate(active);
  },
  activate: function(active) {
    if (this.state.active !== active) {
      window.history.pushState(null, null, `#` + active);
      this.setState({
        active: active || ``
      });
    }
  },
  getPosition: function() {
    if (!this.stickyContainer) {
      return 0;
    }
    return this.stickyContainer.offsetTop;
  },
  render: function() {
    var active = this.state.active;

    return (
      <div ref={(element) => { this.stickyContainer = element; }}>
        <StickyContainer className="sticky-container" stickyFrom={this.getPosition}>
          <div className="container">
            <MenuLink activate={this.activate} active={active} item="about" href="#about">About</MenuLink>
            <MenuLink activate={this.activate} active={active} item="events" href="#events">Events</MenuLink>
            <MenuLink activate={this.activate} active={active} item="details" href="#details">Details</MenuLink>
          </div>
        </StickyContainer>
      </div>
    );
  }
});

module.exports = StickyNav;
