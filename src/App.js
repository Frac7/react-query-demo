/* eslint-disable import/no-anonymous-default-export */
import { Layout } from 'antd';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Content from './components/Content';

import { sections } from './utils';

const { Footer } = Layout;

export default () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Header />
        {sections.map(section => (
          <Route path={section.path} key={section.path}>
            <Content section={section} />
          </Route>
        ))}
        <Route exact path="/">
          <Home />
        </Route>
        <Footer />
      </Layout>
    </Switch>
  </BrowserRouter>
);
