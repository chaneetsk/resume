import React,{Component} from 'react';
import SubHeading from './Header/SubHeading';
import SkillWrap from './Skills/SkillWrap';

export default class Skills extends Component {


  render(){
    return (
      <section className="skill-section">
        <SubHeading heading={this.props.heading}/>
        <SkillWrap skills={this.props.skills}/>
      </section>
    );
  }
}
