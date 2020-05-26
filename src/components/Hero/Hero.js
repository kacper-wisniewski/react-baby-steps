import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => ({
  render() {
    return (
      <header className={styles.component}>
        <img src={props.imageSource} alt="" className={styles.image}/>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
      </header>
    )
  }
})

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
};

export default Hero;
