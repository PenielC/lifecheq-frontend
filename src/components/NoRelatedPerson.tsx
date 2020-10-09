import React, { Component} from "react";
import 'antd/dist/antd.css';
import './NoRelatedPerson.css';
import { PlusCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Row, Col, Input, Select, DatePicker, Radio} from 'antd';
import './NoRelatedPerson.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addRelatedPerson} from '../store/actions/RelatedPerson';
import moment from 'moment';

const { Option } = Select;

interface Props{
  addRelatedPerson: (data: any) => void;
  drawerVisible:boolean;

 }
 
 interface PersonalDetailsState{
     key:string,
     relationship: string,
     firstname:string,
     lastname:string,
     sex:string,
     dateofbirth:any,
     nationalities:string,
     southafricanresident:boolean,
     submitState:boolean,
     setVisible: boolean;
 }

class NoRelatedPerson extends Component<Props, PersonalDetailsState> {
  
  state={
    key:'',   
    relationship:'',
    firstname:'',
    lastname:'',
    sex:'',
    dateofbirth:moment(),
    nationalities:'',
    southafricanresident:false,
    submitState:false,
    setVisible: false  
}

componentDidMount()
{
  if(this.props.drawerVisible){
    this.showDrawer();
  }
  this.setState({key :this.generateId()});
}
    
 showDrawer = () => {
    this.setState({setVisible: true});
  };

  onClose = () => {
    this.setState({setVisible: false});
  };

  generateId = ()=>{
    return Math.floor((Math.random()) * 0x10000)
    .toString(16);
  }

  onSubmit=()=>{
    this.setState({key: this.generateId()});
    const {addRelatedPerson} = this.props;
    addRelatedPerson(this.state);
  }

  onChangeRadio=(e:any)=>{
    e.target.value > 0 ? this.setState({southafricanresident:true}):this.setState({southafricanresident:false})
  }

  onChangeSelect=(value:any)=>{
    this.setState({sex:value})
  }

  render() {
    

    return (
    
      <div className='card'>
          <div className='card-icon'><img src={require('../images/Empty_State_01.svg')}/></div>
          <label className='card-description'>You haven’t added any related persons</label>
          <div><Button type="primary" className='card-button' onClick={this.showDrawer} icon={<PlusCircleOutlined />}>Add person</Button></div>
         
          <Drawer
                title="Add a related person"
                width={350}
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.setVisible}
                className='addPersonDrawer'

                footer={
                    <div
                      style={{
                        textAlign: 'right',
                      }}
                    >
                      <Button type="link" onClick={this.onClose} style={{ marginRight: 33 }} icon={<ArrowLeftOutlined />} >
                        Cancel
                      </Button>
                      <Button onClick={this.onSubmit} type="primary">
                        Add related person
                      </Button>
                    </div>
                  }
            >
                
                <Form layout="vertical" hideRequiredMark>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="relationship"
                  label="Relationship"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" defaultValue={this.state.relationship} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> this.setState({relationship:e.target.value})} />
                </Form.Item>
              </Col>
             
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="firstname"
                  label="First Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" defaultValue={this.state.firstname} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> this.setState({firstname:e.target.value})} />
                </Form.Item>
              </Col>
             
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="lastname"
                  label="Last Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" defaultValue={this.state.lastname} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> this.setState({lastname:e.target.value})} />
                </Form.Item>
              </Col>
             
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  name="sex"
                  label="Sex"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner" defaultValue={this.state.sex} onChange={this.onChangeSelect}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Form.Item>
              </Col>
             
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item
                    name="dateofbirth"
                    label="Date of birth"
                    rules={[{ required: true, message: 'Please choose the dateTime' }]}
                    >
                    <DatePicker defaultValue={moment(this.state.dateofbirth)} onChange={(newDate)=> this.setState({dateofbirth:newDate})} 
                        style={{ width: '100%' }}          
                    />
                    </Form.Item>
                </Col>
             
            </Row>
            <Row>
            <Col span={24}>
                <Form.Item
                  name="nationalities"
                  label="Natinalities"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" defaultValue={this.state.nationalities} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> this.setState({nationalities:e.target.value})}/>
                </Form.Item>
              </Col>
            </Row>
            <Row>
            <Col span={24}>
                <Form.Item
                  name="southafricanresident"
                  label="Permanent South African resident?"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                    <Radio.Group onChange={this.onChangeRadio} defaultValue={this.state.southafricanresident}>
                        <Radio className='radioStyle' value={1}>
                        Yes
                        </Radio>
                        <Radio className='radioStyle' value={0}>
                        No
                        </Radio>
                    </Radio.Group>
                </Form.Item>
              </Col>
            </Row>
          </Form>
      </Drawer>  
      </div>  
    );
  }
}
const mapStateToProps = (state:any) => {
  return {
      addedRelatedPerson : state.addedRelatedPerson,
      drawerVisible :state.AddRelatedPerson.setVisible

  }     
}

const mapDispatchToProps = (dispatch:any) => {
  return {
          addRelatedPerson:bindActionCreators(addRelatedPerson, dispatch)
  }   
}
export default connect(mapStateToProps, mapDispatchToProps)(NoRelatedPerson);


