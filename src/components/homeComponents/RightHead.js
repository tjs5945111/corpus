import React from 'react';
import { connect } from 'dva';
import { Layout, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
import back from '../../assets/images/back.svg'

const { Header } = Layout;
const RightHead = (props) => {
    const { collapsed, onCollapse, keyss, clickTab, userName } = props
    // console.log(collapsed)
    // console.log(keyss)
    return (
        <Header style={{ background: '#fff', paddingLeft: 20, paddingRight: 20, height: "56px" }}>
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => onCollapse(!collapsed)}
            />
            <div style={{ lineHeight: "56px", float: 'right', marginRight: 15 }}>
                <Link to='/'><img style={{ cursor: "pointer", width: '1.7rem' }} alt="退出" src={back} /></Link>
            </div>
            <div style={{ lineHeight: "56px", float: 'right', marginRight: 15 }}>
                <span><Icon type='user' />&nbsp;{userName}</span>
            </div>
            <Menu theme='light'
                mode='horizontal'
                //默认选中状态
                defaultSelectedKeys={[keyss]}
                //子组件向父组件传参（通过父组件定义事件传递）
                onClick={(e) => clickTab(e.key)}
                style={{ position: "relative", top: "-56px", width: "950px", left: "30px" }}
            >
                <Menu.Item key='pc'>
                    <Icon type='home' /><span>洋腔洋调语音语料库</span>
                </Menu.Item>
            </Menu>
        </Header>

    );

};

function mapStateToProps(state) {
    return {
        ...state.login,
    };
}

export default connect(mapStateToProps)(RightHead);
