import React,{Component} from 'react';
import Title from './Header/Title';
import HeaderContent from './Header/HeaderContent';
import Ribbon from './Header/Ribbon';

export default class Header extends Component {
  render(){
    return(
      <header className="header-wrap">
        <Ribbon />
        <Title title={this.props.title}/>
        <p>
          <HeaderContent className="fa fa-map-marker" content={this.props.add}/><br/>
          <HeaderContent className="fa fa-mobile" content={this.props.tel}/><br/>
          <HeaderContent className="fa fa-envelope-o" content={this.props.email}/><br/>
          <HeaderContent className="fa fa-link" content={this.props.web}/><br/>
        </p>
      </header>
    );
  }
}
