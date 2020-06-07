import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
{/*
import Creator from '../Creator/Creator.js';
*/}
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
  }
  render() {
    const {title, icon, cards} = this.props;
    console.log(cards);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} icon={icon} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default Column;
