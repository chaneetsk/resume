import React,{Component} from 'react';

export default class ItemDescription extends Component {
  render(){
    return(
      <div>
        <span>{this.props.course},</span><span> {this.props.school}</span>
      </div>
    );
  }
}
