import Carousel from './carousel';
import React from 'react';
import ReactDOM from 'react-dom';

const images = [
  { id: 1, src: '../Images/001.png' },
  { id: 2, src: '../Images/004.png' },
  { id: 3, src: '../Images/007.png' },
  { id: 4, src: '../Images/025.png' },
  { id: 5, src: '../Images/039.png' }
];

ReactDOM.render(<Carousel imageList={images} />, document.querySelector('#root'));
