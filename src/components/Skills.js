import React,{Component} from 'react';
import SubHeading from './Header/SubHeading';

export default class Skills extends Component {
render(){
    return (
      <section className="skill-section">
        <SubHeading heading={this.props.heading}/>
      </section>
    );
  }
}
