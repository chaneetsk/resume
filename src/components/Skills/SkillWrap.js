import React,{Component} from 'react';
import Header from './Header';
import ItemDescription from './ItemDescription';

export default class SkillWrap extends Component {
  handleEachSkill = (v,i) => {
    return (
      <li key={i}>
        <Header field={v.field}/>
        <ItemDescription set={v.set} />
      </li>
    );
  }
  render(){
    const eachSkill = this.props.skills.map(this.handleEachSkill);
    return(
      <ul>{eachSkill}</ul>
    );
  }
}
