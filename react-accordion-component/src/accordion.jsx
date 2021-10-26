import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onView: 0 };
    this.items = [
      { id: 1, title: 'Hypertext Markup Language', content: 'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
      { id: 2, title: 'Cascading Style Sheets', content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.' },
      { id: 3, title: 'JavaScript', content: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
    ];
    this.handle1Click = this.handle1Click.bind(this);
    this.handle2Click = this.handle2Click.bind(this);
  }

  handle1Click(event) {
    const itemClicked = event.currentTarget.getAttribute('itemID');
    this.setState({ onView: itemClicked });
  }

  handle2Click(event) {
    this.setState({ onView: 0 });
  }

  render() {
    let listItem;
    if (this.state.onView === 0) {
      listItem = this.items.map(item =>
        <div onClick={this.handle1Click} onDoubleClick={this.handle2Click} key={item.id} itemID={item.id}>
          <li>{item.title}</li>
        </div>);
    } else {
      listItem = this.items.map(item =>
        <div onClick={this.handle1Click} onDoubleClick={this.handle2Click} key={item.id} itemID={item.id}>
          <li>{item.title}</li>
          {this.state.onView === item.id.toString() ? <p>{item.content}</p> : ''}
        </div>
      );
    }

    return <ul>{listItem}</ul>;
  }
}

export default Accordion;
