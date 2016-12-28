import React,{Component} from 'react';
import Outer from './Experience/ExpListWrap'
import SubHeading from './Header/SubHeading';
export default class Experience extends Component {
  render() {
    //console.log(item);
    return (
      <section className="exp-section">
        <SubHeading heading={this.props.heading}/>
        <Outer exp={this.props.exp}/>
      </section>
    );
  }
}
