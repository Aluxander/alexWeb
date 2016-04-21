import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from 'components/App/App';
import HomePage from 'components/Views/Homepage/HomePage';
import AboutPage from 'components/Views/AboutPage/AboutPage';

render (
  <Router history={hashHistory}>
    <Route path="/"  component={App}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
      <Route path="contact" component={ContactPage} />
      <Route path="cv" component={CVPage} />
      <Route path="projects" component={ProjectsPage} />
    </Route>
  </Router>,
document.getElementById('app'));
