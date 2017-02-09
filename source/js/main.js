/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "React" }] */

import React from 'react';
import ReactDOM from 'react-dom';
import Details from './components/details.js';
import NsfNav from './components/nsf-nav.js';
import Challenges from './components/challenges.js';

if (document.getElementById(`sticky-nav`)) {
  ReactDOM.render(
    <NsfNav/>,
    document.getElementById(`sticky-nav`)
  );
}

if (document.getElementById(`expander-container`)) {
  ReactDOM.render(
    <Details/>,
    document.getElementById(`expander-container`)
  );
}

if (document.getElementById(`challenges-switcher`)) {
  ReactDOM.render(
    <Challenges/>,
    document.getElementById(`challenges-switcher`)
  );
}
