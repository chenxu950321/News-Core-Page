import React , { Component } from 'react';
import { List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NewList extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        const id = nextProps.match.params.id;
        axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
              
            })
    }
    render(){
        console.log(this.props.match.params.id);
        return(
            <List
                style={{backgroundColor: '#fff'}}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                <List.Item>
                    <Link to={`detail/${item.id}`}>
                        <Typography.Text mark></Typography.Text> {item.title}
                    </Link>
                </List.Item>
                )}
            />
        )
        
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        let url = 'http://www.dell-lee.com/react/api/list.json';
        if(id){
            url = url + '?id=' +id;
        }
        axios.get(url)
            .then(res => {
                this.setState({
                    data: res.data.data
                })
              
            })
    }


}

export default NewList;