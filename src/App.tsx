import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Loader from './components/common/Loader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageContent from './components/layout/PageContent';
import Home from './components/Home';
import Statistics from './components/Statistics';
import TaskList from './components/Task/List';
import TaskDetail from './components/Task/Detail';
import { getDebugInfo } from './utils/debug';
import './assets/style/app.scss';

getDebugInfo();

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <Loader />
      <div className="app-container">
        <Header />
        <PageContent bgExclusionList={['task']}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/task" exact component={TaskList} />
            <Route path="/task/:id" exact component={TaskDetail} />
            <Route path="/statistics" exact component={Statistics} />
            <Redirect to="/" />
          </Switch>
        </PageContent>
      </div>
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
