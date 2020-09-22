import React, { Component } from "react";
import { Input, Col, Row, Button } from "antd";
import { Redirect } from "react-router-dom";
import "./SearchForm.css";
import { Menu, Dropdown } from "antd";
// import { DownOutlined } from "@ant-design/icons";
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        MOVIE
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        SERIES
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        EPISODE
      </a>
    </Menu.Item>
  </Menu>
);

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      fireRedirect: false,
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  };

  render() {
    const { fireRedirect, value: query } = this.state;
    return (
      <Row>
        <Col span={14} offset={5}>
          <form onSubmit={this.handleSubmit}>
            <Input
              className="input"
              placeholder="Search a film..."
              onChange={this.handleChange}
            />
            <Dropdown overlay={menu} placement="menu" arrow>
              <Button>ALL</Button>
            </Dropdown>
            ,
            <Button type="primary" icon="search" onClick={this.handleSubmit}>
              Search
            </Button>
          </form>
        </Col>
        {fireRedirect && query && <Redirect to={`/search/${query}`} push />}
      </Row>
    );
  }
}