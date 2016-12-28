import React,{Component} from 'react';

export default class InnerDescription extends Component {

  eachResponsibilities = () => {
    const arrRespo= [];
    for(let key in this.props.respo) {
      if(this.props.respo.hasOwnProperty(key)) {
        arrRespo.push(this.props.respo[key]);
      }
    }
    return arrRespo.map(function(val,i){
      return <li key={i}>{val}</li>;
    });
  }

  render() {
    return(
      <div className="list-table-description">
        <ul>{this.eachResponsibilities()}</ul>
      </div>
    );
  }
}
