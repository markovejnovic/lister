import React, { Component } from 'react';
import './App.css';
import { Col, Row, Icon, Typography, Carousel, Button, Table } from 'antd';
import axios from 'axios';
import TimeAgo from 'react-timeago'
import { config } from './config';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const columns = [{
  title: '',
  dataIndex: 'image',
  key: 'image',
  render: text => <img className="listingListTableImage" src={text} />
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  render: (text, i) => <Link to={'/listings/' + i.key}><b>{text}</b></Link>
}, {
  title: 'Category',
  dataIndex: 'Category',
  key: 'category'
}, {
  title: 'Price',
  dataIndex: 'price',
  key: 'price'
}];

class ListingListView extends Component {
  state = {
    loading: true,
    dataSource: null
  }

  componentDidMount() {
    let data = []
    axios.get(config.apiRoot + 'listings')
      .then(
        response => {
          response.data.forEach(function (e) {
            data.push({
              key: e.id,
              image: e.images[0],
              title: e.title,
              category: e.categoryId,
              price: e.price
            })
          })
          this.setState({
            loading: false,
            dataSource: data
          })
        })
  }

  render() {
    const { loading, dataSource } = this.state;

    return (
      <div>
        <Row>
          <Col xs={0} sm={0} md={3} lg={3} xl={3} />
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <Table columns={columns} dataSource={dataSource} />
          </Col>
          <Col xs={0} sm={0} md={3} lg={3} xl={3} />
        </Row>
      </div>
    );
  }
}

export default ListingListView;
