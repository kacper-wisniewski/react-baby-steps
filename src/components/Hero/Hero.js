import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => ({
  render() {
    return (
      <header className={styles.component}>
        <img src={props.imageSource} alt="" className={styles.image}/>
        <h2 className={styles.title}>{props.titleText}</h2>
      </header>
    )
  }
})

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
};

export default Hero;
