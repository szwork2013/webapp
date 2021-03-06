import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Icon } from 'components';

export default class Header extends Component {

  static propTypes = {
    buttons: PropTypes.array,
    label: PropTypes.string,
    logo: PropTypes.bool
  };

  render() {
    const styles = require('./Header.scss');

    const { buttons, label, logo } = this.props;
    const leftSideButtons = buttons.filter(button => button.side === 'left');
    const rightSideButtons = buttons.filter(button => button.side === 'right');

    const Button = (button, i) => (
      <button
        key={i}
        name={button.icon}
        className={classNames(styles.button, {[styles.active]: button.active})}
        onClick={button.action}
        data-counter={button.counter}
      >
        <Icon className={styles.icon} name={button.icon} />
      </button>
    );

    return (
      <header className={styles.header}>
        <div className={styles.container}>
          {leftSideButtons.map(Button)}
          {label && <div className={styles.label}>{label}</div>}
          {logo && <div className={styles.logo}></div>}
          {rightSideButtons.map(Button)}
        </div>
    	</header>
    );
  }
}
