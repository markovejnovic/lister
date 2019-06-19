import React, { Component } from 'react';
import './App.css';
import LandingListingsView from './LandingListingsView'
import { Typography } from 'antd';

const { Title } = Typography;

class Index extends Component {
  render() {
    return (
      <div>
        <Title className='mainTitle'>
          Newest Listings
        </Title>
        <LandingListingsView />
      </div>
    );
  }
}

export default Index;
