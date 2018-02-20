/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */

import React from 'react';
import ReactDOM from 'react-dom';
import Faq from './components/faq.js';
import NsfNav from './components/nsf-nav.js';
import Challenges from './components/challenges.js';
import Winners from './components/winners.js';

if (document.getElementById(`sticky-nav`)) {
  ReactDOM.render(
    <NsfNav/>,
    document.getElementById(`sticky-nav`)
  );
}

if (document.getElementById(`expander-container`)) {
  ReactDOM.render(
    <Faq/>,
    document.getElementById(`expander-container`)
  );
}

if (document.getElementById(`challenges-switcher`)) {
  ReactDOM.render(
    <Challenges/>,
    document.getElementById(`challenges-switcher`)
  );
}

if (document.getElementById(`winners-switcher`)) {
  ReactDOM.render(
    <Winners/>,
    document.getElementById(`winners-switcher`)
  );
}
