import React, { Component } from 'react';
import './App.css';
import { Col, Row, Input, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const Search = Input.Search;

class MHeader extends Component {
  render() {
    return (
      <div className="paddedContent">
        <Row gutter={24}>
          <Col className="headerChild" xl={1} lg={1} md={1} sm={0} xs={0} />
          <Col className="headerChild" xl={2} lg={2} md={2} sm={3} xs={24}>
            <h1>
              <Link to='/'>Lister</Link>
            </h1>
          </Col>
          <Col className="headerChild" xl={13} lg={13} md={13} sm={11} xs={24}>
            <Search placeholder="Search Listings"
              onSearch={value => {
                if (!value) {
                  this.props.history.push('/listings');
                } else {
                  this.props.history.push('/listings?q=' + value);
                }
              }}
              enterButton />
          </Col>
          <Col className="headerChild" xl={4} lg={4} md={4} sm={6} xs={24}>
            <Link to="/listings/create"><Button block type="primary">List!</Button></Link>
          </Col>
          <Col className="headerChild" xl={1} lg={1} md={1} sm={0} xs={0} />
          <Col className="headerChild" xl={3} lg={3} md={3} sm={4} xs={24}>
            <Link to="/login"><Button block type="secondary">Login</Button></Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(MHeader);
