import React, { Component } from 'react';
import './App.css';
import { Col, Row, Icon, Typography, Carousel, Button } from 'antd';
import axios from 'axios';
import TimeAgo from 'react-timeago'
import { config } from './config';

const { Title } = Typography;

class ListingView extends Component {
  state = {
    loading: true,
    title: null,
    descriptionBrief: null,
    descriptionLong: null,
    date: null,
    price: null,
    img: null
  }

  componentDidMount() {
    const listingId = this.props.match.params.id
    axios.get(config.apiRoot + 'listings/' + listingId)
      .then(
        response =>
          this.setState({
          loading: false,
          title: response.data.title,
          descriptionBrief: response.data.descriptionBrief,
          descriptionLong: response.data.descriptionLong,
          date: response.data.dateTimePosted,
          price: response.data.price,
          views: response.data.views,
          img: response.data.images.map((i, index) => 
            <div key={index}><img style={{width: '100%'}} alt={response.data.title} src={i} /></div>
          )
        }))
  }

  render() {
    const { loading, title, descriptionBrief, descriptionLong, price, views, date, img} = this.state;

    return (
      <div>
        <Title>{title}</Title>
        <div className="listingViewInner">
          <Row gutter={16}>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <Carousel style={{ width: '300px' }}>
                {img}
              </Carousel>
            </Col>
            <Col xl={16} lg={16} md={12} sm={24} xs={24}>
              <h2>{descriptionBrief}</h2>
              <p>{descriptionLong}</p>
              <Row gutter={16}>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Icon type='eye' /> {views}
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Icon type='calendar' /> <TimeAgo date={date} />
                </Col>
                <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                  <Button block type='primary'>{price}&nbsp;Buy</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ListingView;
