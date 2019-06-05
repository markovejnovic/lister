import React, { Component } from 'react';
import './App.css';
import ListingCard from './ListingCard';
import { Col, Row, Empty, Input, Button } from 'antd';
import axios from 'axios';
import { config } from './config';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const { TextArea } = Input;

class CreateListingView extends Component {
  state = {
    imageElement: <Camera
            onTakePhoto={ (dataUri) => { this.onTakePhoto(dataUri); }}
            isImageMirror={false}
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            imageType={IMAGE_TYPES.JPG}
            isMaxResolution={true} />,
    descriptionBrief: null
  }

  onTakePhoto(dataUri) {
    this.setState({
      imageElement: <img style={{width: '100%'}} src={dataUri} />
    })
  }

  submitForm() {
    axios.post(config.apiRoot + 'listings', {
      title: 'TODO',
      userId: 'TODO',
      descriptionBrief: 'TODO',
      isActive: 1,
      price: 'TODO',
      categoryId: 1
    }, {
      headers: {
        Content-Type: 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTU2Njk0NDQsIm5iZiI6MTU1NTY2OTQ0NCwianRpIjoiZWI0ODNkOWItNmVmMi00YmYzLWE0ZGMtNTZmYWQ0Y2MwMjFjIiwiZXhwIjoxNTU1NjcwMzQ0LCJpZGVudGl0eSI6Im1hcmtvdmVqbm92aWMiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.qwfTvPf_A91nYFfyhFl0owchrKzilr3Z2W5uNW364do'
      }
    })
  }

  render() {
    const { imageElement } = this.state;

    return (
      <div className="createListingViewInner">
        <Row gutter={16}>
          <Col xl={0} lg={0} md={1} sm={1} xs={1} />
          <Col xl={8} lg={8} md={22} sm={22} xs={22}>
            {imageElement}
          </Col>
          <Col xl={0} lg={0} md={1} sm={1} xs={1} />
          <Col xl={16} lg={16} md={24} sm={24} xs={24}>
            <Row gutter={16}>
              <Col className="bottom-space" xl={8} lg={12} md={24} sm={24} xs={24}>
                <Input placeholder="Listing Title" />
              </Col>
              <Col className="bottom-space" xl={16} lg={12} md={24} sm={24} xs={24}> 
                <Input placeholder="Brief Description" value={this.state.descriptionBrief} />
              </Col>
            </Row>
            
            <TextArea className="bottom-space" placeholder="Long Description" autosize />
            <Row gutter={16}>
              <Col xl={16} lg={12} md={8} sm={0} xs={0} />
              <Col xl={4} lg={6} md={8} sm={12} xs={24}>
                <Input placeholder="Price" addonAfter="¥" />
              </Col>
              <Col xl={4} lg={6} md={8} sm={12} xs={24}>
                <Button block type='primary' onClick={this.submitForm}>Post</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateListingView;
