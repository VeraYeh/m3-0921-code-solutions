import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onView: 0 };
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
    const items = this.props.itemList;
    const item = items.map(item =>
      <div onClick={this.handle1Click} onDoubleClick={this.handle2Click} key={item.id} itemID={item.id}>
        <li>{item.title}</li>
        {this.state.onView === item.id.toString() ? <p>{item.content}</p> : ''}
      </div>
    );

    return <ul>{item}</ul>;
  }
}

export default Accordion;
