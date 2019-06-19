import React, { Component } from 'react';
import './App.css';
import MHeader from './MHeader';
import MFooter from './MFooter';
import Index from './Index';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import ListingView from './ListingView';
import ListingListView from './ListingListView';
import CreateListingView from './CreateListingView';
import LoginView from './LoginView';

const {
  Content
} = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <MHeader />
        <Layout>
          <Content>
            <Route exact path='/' component={Index} />
            <Route exact path='/listings' component={ListingListView} />
            <Route exact path='/listings/create' component={CreateListingView} />
            <Route exact path='/listings/:id(\d+)' component={ListingView} />
            <Route exact path='/login' component={LoginView} />
          </Content>
        <MFooter />
        </Layout>
      </Layout>
    );
  }
}

export default App;
