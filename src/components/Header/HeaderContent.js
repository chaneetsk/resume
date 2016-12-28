import React,{Component} from 'react';

export default class HeaderContent extends Component {
  render(){
    return(
      <span>{this.props.content}</span>
    );
  }
}
