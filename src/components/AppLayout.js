import React,{Component} from 'react';
import Header from './Header';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Reference from './Reference';
import Generate from './Generate';

import customData from '../data.json';
import '../App.css';

export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.content = customData;
  }
  //called the first time the component is loaded right before the compoenent is added to the page
  componentWillMount = () => {
    //
  }

  render() {
    return (
      <div>
        <Header
          title={this.content.title}
          add={this.content.add}
          tel={this.content.tel}
          email={this.content.email}
          web={this.content.web}
        />
        <Summary heading="Summary" summary={this.content.summary}/>
        <Experience heading="Experience" exp={this.content.exp}/>
        <Education heading="Education" edu={this.content.edu}/>
        <Skills heading="Skills" skills={this.content.skills}/>
        <Reference heading="Reference"/>
        <Generate data={this.content}/>
      </div>
    );
  }
}
