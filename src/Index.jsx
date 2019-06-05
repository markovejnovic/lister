import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MHeader from './MHeader';
import LandingListingsView from './LandingListingsView'
import { Button, Layout, Input, Typography } from 'antd';

const {
  Content
} = Layout;

const { Title } = Typography;

class Index extends Component {
  render() {
    return (
      <div>
        <Title>
          Newest Listings
        </Title>
        <LandingListingsView />
      </div>
    );
  }
}

export default Index;
