import React,{Component} from 'react';
import SubHeading from './Header/SubHeading';

export default class Reference extends React.Component {
  render() {
    return (
      <section className="ref-section">
        <SubHeading heading={this.props.heading}/>
        <p>Available on Request</p>
        <br/><br/>
      </section>
    );
  }
}
