import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MHeader from './MHeader';
import Index from './Index';
import LandingListingsView from './LandingListingsView'
import { Button, Layout, Input, Typography } from 'antd';
import { Route } from 'react-router-dom';
import ListingView from './ListingView';
import ListingListView from './ListingListView';
import CreateListingView from './CreateListingView';

const {
  Content
} = Layout;

const { Title } = Typography;

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
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
