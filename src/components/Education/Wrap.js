import React,{Component} from 'react';
import Header from './Header';
import ItemDescription from './ItemDescription';

export default class Wrap extends Component {
  handleData = (v,i) => {
    return(
      <div className="list-table-description list-table-edu" key={i}>
        <Header year={v.year}/>
        <ItemDescription course={v.course} school={v.school}/>
      </div>
    );
  }
  render(){
    const eachItem = this.props.edu.map(this.handleData);
    console.log(this.props.edu);

    return(
      <div>
        {eachItem}
      </div>
    );
  }
}
