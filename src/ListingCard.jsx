import React, { Component } from 'react';
import './App.css';
import { Col, Card, Skeleton, Icon } from 'antd';
import axios from 'axios';
import { config } from './config';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class ListingCard extends Component {
  state = {
    loading: true,
    id: null,
    title: null,
    description: null,
    price: null,
    img: null
  }

  componentDidMount() {
    const listingId = this.props.listingId
    axios.get(config.apiRoot + 'listings/' + listingId)
      .then(
        response =>
          this.setState({
          id: listingId,
          loading: false,
          title: response.data.title,
          description: response.data.descriptionBrief,
          price: response.data.price,
          img: response.data.images[0]
        }))
  }

  render() {
    const { loading, id, title, description, price, img} = this.state;

    return (
      <Col className="listingCardContainer" xl={6} lg={8} md={8} sm={12} xs={24}>
        <Card className="listingCard" loading={loading}
          cover={<img className='listingCardImg' alt={title} src={img} />}
          actions={[
            <Icon type="wechat" />, 
            <Link to={'/listings/' + id}><Icon type="user" /></Link>, 
            <div>
              <b>{price}</b>
            </div>
          ]} >
          <Skeleton loading={loading} active>
            <Meta
              title={<Link to={'/listings/' + id}>{title}</Link>}
              description={description}
            />
          </Skeleton>
        </Card>
      </Col>
    );
  }
}

export default ListingCard;
