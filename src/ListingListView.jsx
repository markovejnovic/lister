import React, { Component } from 'react';
import './App.css';
import { Col, Row, Table } from 'antd';
import axios from 'axios';
import { config } from './config';
import { Link } from 'react-router-dom';
const qs = require('query-string');

const columns = [{
  title: 'Image',
  dataIndex: 'image',
  key: 'image',
  render: text => <img alt="" className="listingListTableImage" src={text} />
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  render: (text, i) => <Link to={'/listings/' + i.key}><b>{text}</b></Link>,
  sorter: (a, b) => { return a.title.localeCompare(b.title) }
}, {
  title: 'Category',
  dataIndex: 'category',
  key: 'category',
  sorter: (a, b) => { return a.title.localeCompare(b.title) }
}, {
  title: 'Price',
  dataIndex: 'price',
  key: 'price',
  sorter: (a, b) => a.price - b.price,
}];

class ListingListView extends Component {
  state = {
    dataSource: []
  }

  performApiCall(props) {
    let query = qs.parse(props.location.search).q;
    let t = this;
    let url = "";
    if (!query) {
      url = config.apiRoot + 'listings';
    } else {
      url = config.apiRoot + 'listings?q=' + query;
    }
    axios.get(url).then(response => {
        let data = [];
        if (response.data.length === 0) {
          t.setState({
            dataSource: []
          });
        } else {
          response.data.forEach(function (e) {
            axios.get(config.apiRoot + 'categories/' + e.categoryId).then(response2 => {
              data.push({
                key: e.id,
                image: e.images[0],
                title: e.title,
                category: response2.data.title,
                price: e.price
              });

              t.setState({
                dataSource: data
              });
            });
          });
        }
      })
  }

  componentDidMount() {
    this.performApiCall(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.performApiCall(nextProps);
  }

  render() {
    const { dataSource } = this.state;

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
