import React, { Component } from 'react';
import './App.css';
import ListingCard from './ListingCard';
import { Col, Row, Empty } from 'antd';
import axios from 'axios';
import { config } from './config';

class LandingListingsView extends Component {
  state = {
    listings: 
      <Row>
        <Col>
          <div className="landingListingsViewInner">
            <Empty />
          </div>
        </Col>
      </Row>
  }

  componentDidMount() {
    axios.get(config.apiRoot + 'listings')
      .then(response => this.setState({
        listings: 
          <Row>
            <Col>
              <div className="landingListingsViewInner">
                <Row gutter={24}>
                  {response.data.map((d) => <ListingCard key={d['id']} listingId={d['id']} />)}
                </Row>
              </div>
            </Col>
          </Row>
      }))
  }

  render() {
    const { listings } = this.state;

    return (
      listings
    );
  }
}

export default LandingListingsView;
