/* eslint-disable import/no-anonymous-default-export */
import { Layout } from 'antd';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Content from './components/Content';

import { sections } from './utils';

const { Footer } = Layout;

export default () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Header />
        {sections.map(section => (
          <Route path={section.path} key={section.key}>
            <Content section={section} />
          </Route>
        ))}
        <Footer />
      </Layout>
    </Switch>
  </BrowserRouter>
);
