import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.passwordCheck = this.passwordCheck.bind(this);
  }

  passwordCheck(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let iconClass;
    if (this.state.password.length < 8) {
      iconClass = 'fas fa-times';
    } else {
      iconClass = 'fas fa-check';
    }

    let message;
    if (this.state.password === '') {
      message = 'A password is required.';
    } else if (this.state.password.length < 8) {
      message = 'Your password is too short.';
    } else {
      message = '';
    }

    return (
      <form>
        <label>Password</label>
        <div>
          <input onChange={this.passwordCheck} type="password" value={this.state.password}/>
          <i className={iconClass}></i>
        </div>
        <div className='message'>{message}</div>
      </form>
    );
  }
}

export default ValidateInput;
