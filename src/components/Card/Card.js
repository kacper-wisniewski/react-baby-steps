import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }
  static defaultProps = {
  }
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3><span className={styles.icon}><Icon name={this.props.icon}/></span> {title}</h3>
      </section>
    );
  }
}

export default Card;
