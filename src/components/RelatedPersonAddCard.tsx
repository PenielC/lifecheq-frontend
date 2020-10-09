import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Button, Col} from 'antd';
import './RelatedPersonAddCard.css';
import {PlusCircleOutlined} from '@ant-design/icons';
import {} from '../components/NoRelatedPerson';
import {openDrawer} from '../store/actions/RelatedPerson';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


interface Props{
    openDrawer: (data: boolean) => void;
}

class RelatedPersonAddCard extends Component<Props, {}>{

openDrawer = ()=>{
    const {openDrawer} = this.props;
    openDrawer(true);
}

render() {

return (  
        <Col className='RelatedAddCard' span={10}>
            <div className='addPersonBtn'>
                <Button onClick={this.openDrawer} type='primary' icon={<PlusCircleOutlined />} >Add person</Button>
            </div>
        </Col>  
    );
  }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        openDrawer:bindActionCreators(openDrawer, dispatch)
    }   
  }
  export default connect(null, mapDispatchToProps)(RelatedPersonAddCard);


