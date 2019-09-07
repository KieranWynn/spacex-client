import React from 'react';

export interface Props {
  title: string;
  logo: string;
}

export default class TitleBar extends React.PureComponent<Props, object> {
  render() {
    return (
      <div>
        <img src={this.props.logo} className="App-logo" alt="logo" />
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
