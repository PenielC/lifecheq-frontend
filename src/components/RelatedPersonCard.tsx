import React, { Component } from "react";
import 'antd/dist/antd.css';
import { DownOutlined} from '@ant-design/icons';
import { Button, Col, Dropdown, Menu} from 'antd';
import './RelatedPersonCard.css';

interface Props{
key:string;
relation:string;
fullName: string;
}

class RelatedPersonCard extends Component<Props, {}>{

handleMenuClick=()=>{

}

render() {

const menu = (
    <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1">Remove</Menu.Item>
    </Menu>
);

return (  
        <Col id={this.props.key} className='RelatedCard' span={10}>
        <div>{this.props.fullName}</div>
        <label className='card-description'>{this.props.relation}</label>
        <div>
            <Button >Edit</Button>
            <Dropdown overlay={menu}>
            <Button>
                <DownOutlined />
            </Button>
            </Dropdown>
        </div>
        </Col>  
    );
  }
}
export default RelatedPersonCard;

