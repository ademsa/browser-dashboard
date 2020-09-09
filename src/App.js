import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import ProtocolPages from './components/ProtocolPages'
import MarketShare from './components/MarketShare'
import Download from './components/Download'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import './App.css'

export default function App() {
  React.useEffect(() => {
    document.title = 'Browser Dashboard'
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/404'>
            <Layout>
              <NotFound />
            </Layout>
          </Route>
          <Route exact path='/protocol-pages'>
            <Layout>
              <ProtocolPages />
            </Layout>
          </Route>
          <Route exact path='/market-share'>
            <Layout>
              <MarketShare />
            </Layout>
          </Route>
          <Route exact path='/download'>
            <Layout>
              <Download />
            </Layout>
          </Route>
          <Route exact path='/dashboard'>
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
          <Route exact path='/'>
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
          <Route path='*'>
            <Layout>
              <NotFound />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
