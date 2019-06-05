import React, { Component } from 'react';
import './App.css';
import { Col, Row, Layout, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const {
  Header
} = Layout;

const Search = Input.Search;

class MHeader extends Component {
  render() {
    return (
      <div className="mHeader">
        <Row gutter={24}>
          <Col className="headerChild" xl={2} lg={3} md={6} sm={6} xs={24}>
            <h1>
              <Link to='/'>Lister</Link>
            </h1>
          </Col>
          <Col className="headerChild" xl={18} lg={17} md={12} sm={12} xs={24}>
            <Search
              placeholder="Search Listings"
              onSearch={value => console.log(value)}
            />
          </Col>
          <Col className="headerChild" xl={4} lg={4} md={6} sm={6} xs={24}>
            <Button block type="primary">List!</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MHeader;
