import React,{Component} from 'react';

export default class Header extends Component {
  render(){
    return(
      <span>{this.props.field}</span>
    );
  }
}
