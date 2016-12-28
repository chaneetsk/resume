import React,{Component} from 'react';
import SubHeading from './Header/SubHeading';
import HeaderContent from './Header/HeaderContent';

export default class Summary extends Component {
  render(){
    return (
      <section className="summary-section">
        <SubHeading heading={this.props.heading}/>
        <HeaderContent content={this.props.summary}/>
      </section>
    );
  }
}
