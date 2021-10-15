import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSwitchOn: false };
    this.switch = this.switch.bind(this);
  }

  switch() {
    const status = !this.state.isSwitchOn;
    this.setState({ isSwitchOn: status });
  }

  render() {
    let buttonMode;
    let switchMode;
    let text = 'OFF';
    if (this.state.isSwitchOn) {
      buttonMode = 'buttonOn';
      switchMode = 'switchOn';
      text = 'ON';
    }

    return (
      <div>
        <button onClick={this.switch} className={buttonMode}>
          <div className={switchMode}></div>
        </button>
        <h3>{text}</h3>
      </div>
    );
  }
}

export default ToggleSwitch;
