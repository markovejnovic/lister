import React, { Component } from 'react';
import './App.css';
import ListingCard from './ListingCard';
import { Form, Icon, Input, Button, Checkbox, Col, Row } from 'antd';
import axios from 'axios';
import { config } from './config';

class LoginView extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // TODO: Write the login logic
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="paddedContent">
        <Row gutter={24}>
          <Col xl={9} lg={8} md={7} sm={6} xs={0} />
          <Col xl={6} lg={8} md={10} sm={12} xs={24}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </Col>
          <Col xl={9} lg={8} md={7} sm={6} xs={0} />
        </Row>
      </div>
    );
  }
}

export default Form.create({ name: 'normal_login' })(LoginView);
