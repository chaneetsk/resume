import React,{Component} from 'react';

export default class HeaderContent extends Component {
  render(){
    return(
      <span>
        <i className={this.props.className} aria-hidden="true"></i>
          {" "+this.props.content}
      </span>
    );
  }
}
