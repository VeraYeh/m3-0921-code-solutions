// const toArray = require('./to-array'); // original
import toArray from './to-array'; // my edit

// function createElement(tagName, attributes, children = []) { // original
export default function createElement(tagName, attributes, children = []) { // my edit
  const parent = document.createElement(tagName);
  for (const name in attributes) {
    parent.setAttribute(name, attributes[name]);
  }
  toArray(children).forEach(child => {
    if (!(child instanceof HTMLElement)) {
      child = document.createTextNode(child);
    }
    parent.appendChild(child);
  });
  return parent;
}

// module.exports = createElement; // original
