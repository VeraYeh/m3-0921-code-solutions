import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0, color: 'initial' };
    this.switch = this.switch.bind(this);
  }

  switch() {
    let count = this.state.clickCount;
    count++;
    this.setState({ clickCount: count });
    if (count >= 3 && count < 6) {
      this.setState({ color: 'darkPurple' });
    } else if (count >= 6 && count < 9) {
      this.setState({ color: 'purple' });
    } else if (count >= 9 && count < 12) {
      this.setState({ color: 'salmon' });
    } else if (count >= 12 && count < 15) {
      this.setState({ color: 'lightOrange' });
    } else if (count >= 15 && count < 18) {
      this.setState({ color: 'yellow' });
    } else if (count >= 18) {
      this.setState({ color: 'white' });
    }
  }

  render() {
    return (
      <button onClick={this.switch} className={this.state.color + ' button'}>Hot Button</button>
    );
  }
}

export default HotButton;
