import React, {Component} from 'react';
import SubHeading from './Header/SubHeading';
import Wrap from './Education/Wrap';

export default class Education extends Component {
  render(){
    return (
      <section className="edu-section">
        <SubHeading heading={this.props.heading}/>
        <Wrap edu={this.props.edu}/>
      </section>
    );
  }
}
