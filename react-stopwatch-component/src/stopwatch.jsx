import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playMode: 'pause', timer: '0' };
    this.click = this.click.bind(this);
    this.reset = this.reset.bind(this);
  }

  click() {
    let timer = this.state.timer;

    if (this.state.playMode === 'pause') {
      this.setState({ playMode: 'start' });
      this.counter = setInterval(() => {
        timer++;
        this.setState({ timer: timer });
      }, 1000);
    } else if (this.state.playMode === 'start') {
      this.setState({ playMode: 'pause', timer: timer });
      clearInterval(this.counter);
    }
  }

  reset() {
    if (this.state.playMode === 'pause') {
      this.setState({ timer: 0 });
    }
  }

  render() {
    let icon;

    if (this.state.playMode === 'start') {
      icon = 'fas fa-pause';
    } else {
      icon = 'fas fa-play';
    }

    return (
      <div className = "container">
        <div onClick={this.reset} className="circle">
          <div>
            <h1>{this.state.timer}</h1>
          </div>
        </div>
        <div>
          <i onClick={this.click} className={icon}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
