import React from 'react';
import './TitleBar.css'

export interface Props {
  title: string;
  logo?: string;
}

export default class TitleBar extends React.PureComponent<Props, object> {
  render() {
    let logoElement;
    if (this.props.logo) {
      logoElement = <img src={this.props.logo} className="title-logo" alt="logo" />;
    } else {
      logoElement = ""
    }
    return (
      <div className="title-row">
        {logoElement}
        <h1 className="title-text">{this.props.title}</h1>
      </div>
    )
  }
}
