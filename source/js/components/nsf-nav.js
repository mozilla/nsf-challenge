import React from 'react';
import classnames from "classnames";
import StickyContainer from './sticky-container.js';

var MenuLink = React.createClass({
  onClick: function() {
    this.props.activate(this.props.item);
  },
  render: function() {
    var className = classnames(`menu-link`, {
      "active": this.props.active === this.props.item
    });

    return (
      <a className={className} onClick={this.onClick} href={this.props.href}>{this.props.children}</a>
    );
  }
});

var MenuLinks = React.createClass({
  getInitialState: function() {
    return {
      active: window.location.hash.replace(`#`, ``) || ``,
      links: [].slice.call(document.querySelectorAll(`.nav-anchor`))
    };
  },
  componentDidMount: function() {
    document.addEventListener(`scroll`, this.onScroll);
  },
  componentWillUnmount: function() {
    document.removeEventListener(`scroll`, this.onScroll);
  },
  onScroll: function() {
    var links = this.state.links || [];
    var hash = window.location.hash.replace(`#`, ``);
    var active = links[0] || ``;
    var scrollY = window.scrollY;

    if (hash && !document.querySelector(`.nav-anchor#` + hash)) {
      return;
    }

    links.forEach((element) => {
      if (scrollY >= element.offsetTop) {
        active = element;
      }
    });

    // If we're at the bottom of the page, ensure the last item is active.
    // This is in case the last item's height is less than the window height.
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      active = links[links.length-1];
    }

    this.activate(active.getAttribute(`id`));
  },
  activate: function(active) {
    if (this.state.active !== active) {
      window.history.replaceState({}, null, `#` + active);
      this.setState({
        active: active || ``
      });
    }
  },
  render: function() {
    var active = this.state.active;

    return (
      <div className="container">
        {
          this.state.links.map((element, index) => {
            var link = element.getAttribute(`id`);

            return (
              <MenuLink key={index}
                activate={this.activate}
                active={active}
                item={link}
                href={`#` + link}
              >
                {link}
              </MenuLink>
            );
          })
        }
      </div>
    );
  }
});

var StickyNav = React.createClass({
  getPosition: function() {
    if (!this.stickyContainer) {
      return 0;
    }
    return this.stickyContainer.offsetTop;
  },
  render: function() {
    return (
      <div ref={(element) => { this.stickyContainer = element; }}>
        <StickyContainer className="sticky-container" stickyFrom={this.getPosition}>
          <MenuLinks/>
        </StickyContainer>
      </div>
    );
  }
});

module.exports = StickyNav;
