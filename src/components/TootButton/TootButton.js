import React from 'react';

export default class TootButton extends React.Component {
  constructor(){
    super();

    this.state = {
      clicks: 0,
      person: {
        firstName: 'Keith'
      }
    };
  }

  buttonClick = e => {
    this.setState(state => ({ clicks: state.clicks+1}));
    this.props.onClick(e);
  }

  render(){
  const { onClick } = this.props;

  return (
    <button data-testid="toot-button"
      className="btn btn-primary"
       onClick={this.buttonClick}>Toot</button>
  );
  }
}
