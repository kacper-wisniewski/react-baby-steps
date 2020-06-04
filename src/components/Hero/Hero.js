import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Hero extends React.Component {
  static propTypes = {
    titleText: PropTypes.node.isRequired,
    imageSource: PropTypes.node.isRequired,
  }

  render() {
    return (
      <header className={styles.component}>
        <img src={this.props.imageSource} alt="" className={styles.image}/>
        <h2 className={styles.title}>{ReactHtmlParser(this.props.titleText)}</h2>
      </header>
    );
  }
}

export default Hero;
