import React,{Component} from 'react';

export default class InnerTop extends Component {
  render() {
    return (
      <header className="list-table-title">
        <span>{this.props.title} ({this.props.year})</span>
        <span></span>
      </header>
    );
  }
}
