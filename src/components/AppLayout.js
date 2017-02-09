import React,{Component} from 'react';
import Header from './Header';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
// import Reference from './Reference';
// import Generate from './Generate';
import Footer from './Footer';
import axios from 'axios';

//import customData from '../data.json';
import '../App.css';

export default class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {}
    };
  }
  /* called the first time the component is loaded
  right after the compoenent is added to the page */
  componentDidMount = () => {
    const url = "./data.json";
    const _this = this;
    axios.get(url)
      .then(function(response){
        _this.setState({
          content: response.data
        });
      }).catch(function(err){
        console.log(err);
      });
  }

  render() {
    if(Object.getOwnPropertyNames(this.state.content).length === 0) {
      return (
        <div>Loading..</div>
      );
    }
    return (
      <div>
        <Header
          title={this.state.content.title}
          add={this.state.content.add}
          tel={this.state.content.tel}
          email={this.state.content.email}
          web={this.state.content.web}
          linkedIn={this.state.content.linkedIn}
        />
        <Summary heading="Summary" summary={this.state.content.summary}/>
        <Experience heading="Experience" exp={this.state.content.exp}/>
        <Education heading="Education" edu={this.state.content.edu}/>
        <Skills heading="Skills" skills={this.state.content.skills}/>
        {/*<Reference />*/}
        {/*}<Generate data={this.state.content}/>*/}
        <Footer />
      </div>
    );
  }
}
/*


  */
