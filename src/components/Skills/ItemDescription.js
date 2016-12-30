import React,{Component} from 'react';

export default class ItemDescription extends Component {
  render(){
    return(
      <span>{this.props.set}</span>
    );
  }
}
