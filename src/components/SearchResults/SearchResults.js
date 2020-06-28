import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultSearchIcon,
  }
  render() {
    const {icon, cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} icon={icon} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;