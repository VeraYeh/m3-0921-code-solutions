import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('component state: ', this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input onChange={this.handleChange} type="email" value={this.state.email} />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
