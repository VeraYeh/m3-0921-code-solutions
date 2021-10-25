import React from 'react';

const menuItems = ['Menu', 'About', 'Get Started', 'Sign in'];

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuOpened: false };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }

  closeMenu() {
    this.setState({ isMenuOpened: false });
  }

  render() {
    let background;
    let menu;
    let icon;
    if (this.state.isMenuOpened) {
      background = 'modal';
      menu = 'menu';
      icon = 'hidden';
    } else {
      background = 'hidden';
      menu = 'hidden';
      icon = 'fas fa-bars';
    }

    const listItem = menuItems.map((listItem, index) =>
      <li key={index}>{listItem}</li>
    );

    return (
      <div>
        <i onClick={this.openMenu} className={icon}></i>
        <div onClick={this.closeMenu} className={background}>
          <div className={menu}>
            <ul onClick={this.closeMenu}>{listItem}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
