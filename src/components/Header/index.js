import React, {Component, Fragment} from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Menu } from 'antd';
import { UsergroupDeleteOutlined, 
    IdcardOutlined,
    DingdingOutlined,
    GoogleOutlined,
    WechatOutlined,
    DribbbleOutlined } from '@ant-design/icons';
import './style.css';

class AppHeader extends Component{

    constructor(props){
        super(props);
        this.state = {
            list: [],
            icons: [<UsergroupDeleteOutlined />,
                <IdcardOutlined />,
                <DingdingOutlined />,
                <GoogleOutlined />,
                <WechatOutlined />,
                <DribbbleOutlined />]
        }
    }


    getMenuItems(){
        return this.state.list.map(item => {
            return (
                <Menu.Item key={item.id}>
                    <Link to={`/${item.id}`}> 
                        {this.state.icons[item.id-1]}{item.title}
                    </Link>
                </Menu.Item>
                    
            )
        })
    }

    componentDidMount(){
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then((res) => {
                this.setState({
                    list:res.data.data
                })
            })
    }


    render(){
        return (
            <Fragment>
                <Link to='/'>
                <img src={logo} className='app-header-logo' alt='appHeaderLogo'/>
                </Link>
                <Menu
                     mode="horizontal"
                     className="app-header-menu"
                >
                    {this.getMenuItems()}
                </Menu>
            </Fragment>
        )
    }
}


export default AppHeader;