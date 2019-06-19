import React, { Component } from 'react';
import './App.css';
import { Typography } from 'antd';

const { Text } = Typography;

class MFooter extends Component {
  render() {
    return (
      <div className="mFooter">
        <div>
          <h2>Lister - UWC Changshu China</h2>
        </div>
        <div>
          <Text code>Designed with ♥ by Marko Vejnovic</Text>
        </div>
        <div>
          <a href="https://www.github.com/markovejnovic/lister">Github</a>
        </div>
      </div>
    );
  }
}

export default MFooter;
