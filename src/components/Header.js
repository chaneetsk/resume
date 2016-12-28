import React,{Component} from 'react';
import Title from './Header/Title';
import HeaderContent from './Header/HeaderContent';

export default class Header extends Component {
  render(){
    return(
      <header className="header-wrap">
        <Title title={this.props.title}/>
        <p>
          <HeaderContent content={this.props.add}/><br/>
          <HeaderContent content={this.props.tel}/><br/>
          <HeaderContent content={this.props.email}/><br/>
          <HeaderContent content={this.props.web}/><br/>
        </p>
      </header>
    );
  }
}
