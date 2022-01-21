import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onView: 1 };
    this.nextImage = this.nextImage.bind(this);
    this.preImage = this.preImage.bind(this);
    this.handleDots = this.handleDots.bind(this);
  }

  nextImage() {
    let currentView = this.state.onView;
    if (currentView < this.props.imageList.length) {
      currentView++;
      this.setState({ onView: currentView });
    } else if (currentView === this.props.imageList.length) {
      currentView = 1;
      this.setState({ onView: currentView });
    }
  }

  preImage() {
    let currentView = this.state.onView;
    if (currentView > 1) {
      currentView--;
      this.setState({ onView: currentView });
    } else if (currentView === 1) {
      currentView = this.props.imageList.length;
      this.setState({ onView: currentView });
    }
  }

  handleDots(dot) {
    const currentView = Number(dot.target.id);
    this.setState({ onView: currentView });
  }

  componentDidMount() {
    this.timer = setInterval(this.nextImage, 3000);
  }

  render() {
    const images = this.props.imageList;
    const image = images.map(image =>
        < img key = {image.id} src={image.src} className={this.state.onView === image.id ? ' ' : 'empty'}/>
    );
    const dot = images.map(image =>
      <div key={image.id} onClick={this.handleDots}>
        {image.id === this.state.onView ? <i id={image.id} className="dot far fa-circle"></i> : <i id={image.id} className="dot fas fa-circle"></i>}
      </div>
    );

    return (
      <div>
        <div>
          <i className="fas fa-chevron-left" onClick={this.preImage}></i>
          {image}
          <i className="fas fa-chevron-right" onClick={this.nextImage}></i>
        </div>
        <div>{dot}</div>
      </div>
    );
  }
}

export default Carousel;
