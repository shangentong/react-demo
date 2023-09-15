/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
    HomeFilled,
    ShoppingFilled,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Row, Col, Typography, theme } from "antd";
import type { MenuProps } from "antd";
import HeaderRight from "../HeaderRight";
import ReactLogo from '../../assets/react.svg';
import Loading from "../Loading";

const { Header, Sider, Content } = Layout;

const items: MenuProps["items"] = [
    {
        label: "home",
        path: "/home",
        icon: HomeFilled,
    },
    {
        label: "about",
        path: "/about",
        icon: ShoppingFilled,
    },
].map((nav) => ({
    key: nav.path,
    icon: React.createElement(nav.icon),
    label: nav.label,
}));

const BasicLayout = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [collapsed, setCollapsed] = useState(false);

    const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
        navigate(key);
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ height: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div
                    className="flex justify-center items-center h-14 bg-slate-600 mt-1 mb-1 mr-2 ml-2 rounded-md"
                >
                     <img src={ReactLogo} alt="logo" className="fle" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    items={items}
                    onClick={handleMenuClick}
                />
            </Sider>
            <Layout>
                <Header className="h-16 bg-white p-0" style={{borderBottom:'1px solid #ccc'}}>
                    {/* <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
                /> */}
                    <Row
                        justify="space-between"
                        align="middle"
                        style={{ paddingRight: "24px" }}
                    >
                        <Col>
                            <Button
                                type="text"
                                icon={
                                    collapsed ? (
                                        <MenuUnfoldOutlined />
                                    ) : (
                                        <MenuFoldOutlined />
                                    )
                                }
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: "16px",
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Col>
                        <Col>
                            <Typography.Text strong style={{ fontSize: 18 }}>
                                {/* react-demo */}
                            </Typography.Text>
                        </Col>
                        <Col style={{ display: "flex" }}>
                            {/* <HeaderRight /> */}
                            {/* userInfo */}
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        padding: "16px",
                        flex: 1,
                        overflowY: "auto",
                        background: "#fff",
                    }}
                >
                    <Outlet />

                </Content>
            </Layout>
        </Layout>
    );
};

export default BasicLayout;
