import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageContent from './components/layout/PageContent';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Users from './components/Users';
import { getDebugInfo } from './utils/debug';
import './assets/style/app.scss';

if (!process.env.REACT_APP_USE_MF) {
  getDebugInfo();
}

const App = () => (
  <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
    <div className="app-container">
      <Header />
      <PageContent bgExclusionList={['task']}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/statistics" exact component={Statistics} />
          <Redirect to="/" />
        </Switch>
      </PageContent>
    </div>
    <Footer />
  </BrowserRouter>
);

export default App;
