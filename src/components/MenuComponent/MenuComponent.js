/**
 * Created by chenqu on 2017/10/7.
 */
import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router';
import 'antd/dist/antd.css';
import './MenuComponent.pcss';

const SubMenu = Menu.SubMenu;

export default class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (<div>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                点我展开导航栏
            </Button>
            <Menu
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
            >
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span><Link to="/list">list</Link></span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span><Link to="/detail">detail</Link></span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span><Link to="/form">form</Link></span>
                </Menu.Item>
            </Menu>
            { this.props.children }
        </div>);
    }

}
