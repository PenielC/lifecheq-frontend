import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Row } from 'antd';
import {connect} from 'react-redux';
import NoRelatedPerson from '../components/NoRelatedPerson';
import RelatedPersonCard from '../components/RelatedPersonCard';
import RelatedPersonAddCard from '../components/RelatedPersonAddCard';
import './Landing.css';

class Landing extends Component<any, {}>{

buildCards = (relatives:any)=>{
     var html =[];
      for(var i = 0; i < relatives.length; i++)
      {
        let fullname = relatives[i]['firstname']+' '+relatives[i]['lastname'];
        html.push(<RelatedPersonCard  key={relatives[i]['key']} relation={relatives[i]['relationship']} fullName={fullname} />);
      }     
      return html;
}

render() {
   
    return (
      <div>
        <h1>Related persons</h1>
        {this.props.addedRelatedPerson != undefined && this.props.addedRelatedPerson.length > 0? 
        <Row className='LandingPersonalRow' gutter={16}>
          {this.buildCards(this.props.addedRelatedPerson)}
          <RelatedPersonAddCard/>
        </Row>:
        <NoRelatedPerson/>
        }
      </div>
    );
  }
}
const mapStateToProps = (state:any) => {
  return {
      addedRelatedPerson : state.AddRelatedPerson.addRelatedPerson  
  }     
}
export default connect(mapStateToProps, null)(Landing);
