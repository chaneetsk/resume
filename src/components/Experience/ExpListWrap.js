import React, {Component} from 'react';
import InnerTop from './Header';
import InnerDescription from './ItemDescription';

export default class Outer extends Component {
  handleItems = (v,i) => {
    //console.log(v);
    return (
      <div key={i}>
        <InnerTop title={v.title} year={v.year}>
        </InnerTop>
        <InnerDescription respo={v.des}/>
      </div>
    );
  }

  render(){
    const eachExp = this.props.exp.map(this.handleItems);
    return (
        <div className="list-table">{eachExp}</div>
    );
  }
}
