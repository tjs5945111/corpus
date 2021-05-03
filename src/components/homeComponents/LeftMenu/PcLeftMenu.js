import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'dva';
import { useState } from 'react';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const PcLeftMenu = (props) => {
    const [selectedKey, onClick] = useState([]);
    const [openKey, openChange] = useState([]);
    const { collapsed } = props
    const urlParams = new URL(window.location.href);
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ minHeight: '100vh' }} >
            <div style={{ color: '#fff', textAlign: 'center', padding: "3px", fontSize: "18px" }} >{collapsed ? '' : "语音预料系统"}</div>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[urlParams?.hash]}
                defaultOpenKeys={['search', 'list']}
                onClick={(e) => onClick("e.key")}
            //  onOpenChange={this.openChange.bind(this)}
            >
                <SubMenu
                    key='search'
                    title={<span><Icon type="file" /><span className="nav-text">控制管理</span></span>}
                >
                    <Menu.Item key='#/pc/source/system'><Link to='/pc/source/system'>基本信息检索</Link></Menu.Item>
                    <Menu.Item key='#/pc/source/service'><Link to='/pc/source/service'>高级检索</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                    key='list'
                    title={<span><Icon type="file" /><span className="nav-text">资源管理</span></span>}
                >
                    <Menu.Item key='#/pc/source/topic'><Link to='/pc/source/topic'>语音语料列表</Link></Menu.Item>
                    <Menu.Item key='#/pc/source/datacontent'><Link to='/pc/source/datacontent'>数据可视化</Link></Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>

    );

};

PcLeftMenu.propTypes = {
};

export default PcLeftMenu;
