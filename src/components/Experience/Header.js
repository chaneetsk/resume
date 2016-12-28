import React,{Component} from 'react';

export default class InnerTop extends Component {
  render() {
    return (
      <header className="list-table-title">
        <span>{this.props.title}</span>
        <span>{this.props.year}</span>
      </header>
    );
  }
}
