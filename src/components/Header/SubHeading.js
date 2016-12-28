import React,{Component} from 'react';

export default class SubHeading extends Component {
  render(){
    return <h2 className="sub-heading">{this.props.heading}</h2>;
  }
}
